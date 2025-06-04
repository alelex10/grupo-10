const hiddenClass = 'hidden';

export function showNotification(text, notification) {
    notification.querySelector('.notification__content').textContent = text;
    notification.classList.remove(hiddenClass);

    setTimeout(() => {
        hideNotification(notification);
    }, 2000);
}

function hideNotification(notification) {
    notification.classList.add(hiddenClass);
}