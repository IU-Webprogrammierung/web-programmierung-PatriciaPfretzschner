document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('cookiePopup');
    const button = document.getElementById('acceptCookies');


    if (!sessionStorage.getItem('cookieAccepted')) {
        popup.classList.remove('hidden');
    }

    button.addEventListener('click', function () {
        popup.classList.add('hidden');
        sessionStorage.setItem('cookieAccepted', 'true');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('newsletterForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        successMessage.classList.remove('hidden');
        form.reset();
    });
});