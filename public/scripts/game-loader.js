import { setupWishlistButton } from './wishlist.js';
//import { auth } from './autenticacion.js';
//import { showNotification } from './notification.js';

const apiKey = 'a707fb0dd76f4b69a37f1cb57a7ab2f4';


const params = new URLSearchParams(window.location.search);
const title = params.get('title');

const loader = document.getElementById('loader');
const notification = document.getElementById('notification');
document.querySelector('.banner').style.display = 'none';
document.querySelector('main').style.display = 'none';
loader.style.display = 'block';

try {
    const gameRes = await fetch(`https://api.rawg.io/api/games/${title}?key=${apiKey}`);
    const game = await gameRes.json();

    // Game details
    document.querySelector('#banner').src = game.background_image_additional;
    document.querySelector('#game-cover').src = game.background_image;
    document.querySelector('#game-title').textContent = game.name;
    document.title = `${game.name} - GameVault`;
    document.querySelector('#game-price').innerHTML = `$${(Math.random() * 100).toFixed(2)}`;

    // Visuals
    const visualsRes = await fetch(`https://api.rawg.io/api/games/${game.id}/screenshots?key=${apiKey}`);
    const screenshots = (await visualsRes.json()).results;
    const visualsGallery = document.querySelector('#visuals-gallery');

    if (screenshots.length > 0) {
        visualsGallery.innerHTML = '';
        screenshots.forEach(screenshot => {
            /*
            <picture class="visuals__item">
                    <img src="#" alt="Game Cover">
                </picture>
            */
            const item = document.createElement('picture');
            item.setAttribute('data-astro-cid-gpfhifiw', '');
            item.classList.add('visuals__item');
            item.innerHTML = `<img src="${screenshot.image}" alt="Game Cover" data-astro-cid-gpfhifiw>`;
            visualsGallery.appendChild(item);
        });
    } else {
        visualsGallery.innerHTML = `<p class="about__description" data-astro-cid-gpfhifiw>No se han encontrado screenshots</p>`;
    }

    // Information
    const setListFromArray = (selector, array, getVal) => {
        const el = document.querySelector(selector);
        if (!el || !array?.length) return;
        el.innerHTML = array.map(getVal).join(', ');
    };

    document.querySelector('#about-description').innerHTML = game.description_raw || '-';
    setListFromArray('#about-developers', game.developers, d => d.name);
    setListFromArray('#about-publishers', game.publishers, p => p.name);
    setListFromArray('#about-genres', game.genres, g => g.name);
    setListFromArray('#about-platforms', game.platforms, p => p.platform.name);
    document.querySelector('#about-release').textContent = game.released || '-';
    document.querySelector('#about-website').innerHTML = `<a href="${game.website}" target="_blank">${game.name}</a>`;

    // Expansiones
    const expansionsRes = await fetch(`https://api.rawg.io/api/games/${game.id}/additions?key=${apiKey}`);
    const expansions = (await expansionsRes.json()).results;
    const expansionsList = document.querySelector('#expansions-list');

    if (expansions.length > 0) {
        expansionsList.innerHTML = '';
        expansions.forEach(exp => {
            const item = document.createElement('div');
            item.setAttribute('data-astro-cid-gpfhifiw', '');
            item.classList.add('expansions__item');
            item.innerHTML = `
                <picture class="expansions__image" data-astro-cid-gpfhifiw>
                    <img src="${exp.background_image}" alt="${exp.name}" data-astro-cid-gpfhifiw>
                </picture>
                <p class="expansions__name" data-astro-cid-gpfhifiw>${exp.name}</p>`;
            expansionsList.appendChild(item);
        });
    } else {
        expansionsList.innerHTML = `<p class="about__description" data-astro-cid-gpfhifiw>No se han encontrado extensiones</p>`;
    }

    // Requirements
    const pcPlatform = game.platforms.find(p => p.platform.name === 'PC');
    const req = pcPlatform?.requirements || {};
    if (Object.keys(req).length > 0) {
        document.querySelector('#requirements-pc-minimum').innerHTML = (req.minimum || '').replace('Minimum:', '').replace(/\n/g, '<br>');
        document.querySelector('#requirements-pc-recommended').innerHTML = (req.recommended || '').replace('Recommended:', '').replace(/\n/g, '<br>');
    } else {
        document.querySelector('#requirements-pc').innerHTML = `<p class="about__description">No se han encontrado requisitos</p>`;
    }

    // Show content
    loader.style.display = 'none';
    document.querySelector('.banner').style.display = '';
    document.querySelector('main').style.display = '';

    // Wishlist: initialize button
    setupWishlistButton(game, document.querySelector('.game__button--wishlist'), notification);

} catch (err) {
    console.error('Error al cargar los datos del juego:', err);
    loader.innerHTML = '<p>Error al cargar la información del juego. Intenta más tarde.</p>';
    loader.classList.remove('isLoading');
}
