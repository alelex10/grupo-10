import { showNotification } from './notification.js';

function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function saveWishlist(wishlist) {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function isInWishlist(id) {
    return getWishlist().some(item => item.id === id);
}

function addToWishlist(game) {
    const wishlist = getWishlist();
    if (!isInWishlist(game.id)) {
        wishlist.push(game);
        saveWishlist(wishlist);
    }
}

function removeFromWishlist(id) {
    const wishlist = getWishlist().filter(item => item.id !== id);
    saveWishlist(wishlist);
}

export function setupWishlistButton(game, buttonEl, notificationEl) {
    if (!buttonEl) return;

    if (isInWishlist(game.id)) {
        buttonEl.classList.add('added');
    }

    buttonEl.addEventListener('click', () => {
        const gameData = {
            id: game.id,
            slug: game.slug,
            name: game.name,
            cover: game.background_image,
            price: parseFloat(document.querySelector('#game-price').textContent.replace('$', ''))
        };

        if (isInWishlist(game.id)) {
            removeFromWishlist(game.id);
            showNotification(`${game.name} fue eliminado de tu wishlist`, notificationEl);
            //alert(`${game.name} fue eliminado de tu wishlist`);
            buttonEl.classList.remove('added');
        } else {
            addToWishlist(gameData);
            showNotification(`${game.name} fue agregado a tu wishlist`, notificationEl);
            //alert(`${game.name} fue agregado a tu wishlist`);
            buttonEl.classList.add('added');
        }
    });
}

export { getWishlist, removeFromWishlist, isInWishlist };
