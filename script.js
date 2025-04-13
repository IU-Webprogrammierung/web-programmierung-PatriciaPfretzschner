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


document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.accordion-button');
  
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        const panelId = button.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
  
        // Toggle Zustand
        button.setAttribute('aria-expanded', !expanded);
        panel.hidden = expanded;
      });
  
      // Optional: Tastatursteuerung mit Enter/Leertaste
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
        }
      });
    });
  });
  