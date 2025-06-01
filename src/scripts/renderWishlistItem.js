export function renderWishlistItem(game, astroAttribute) {
    const item = document.createElement('div');
    item.setAttribute(astroAttribute, '');
    item.classList.add('wishlist__item');

    item.innerHTML = `
        <picture class="item__image" ${astroAttribute}>
            <img src="${game.cover}" alt="${game.name}" ${astroAttribute}>
        </picture>
        <div class="item__details" ${astroAttribute}>
            <h2 class="item__title" ${astroAttribute}>${game.name}</h2>
            <button class="item__button" aria-label="Eliminar de la wishlist" ${astroAttribute}>
                <img src="/bin-icon.svg" alt="Icono de Borrar" ${astroAttribute}>
            </button>
        </div>
    `;

    return item;
}
