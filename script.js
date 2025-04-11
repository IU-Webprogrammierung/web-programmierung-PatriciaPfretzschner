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
  