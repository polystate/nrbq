document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const mainContainer = document.querySelector('.main');
  const homeTemplate = document.getElementById('home-template').innerHTML;
  const newsTemplate = document.getElementById('news-template').innerHTML;
  const galleryTemplate = document.getElementById('gallery-template').innerHTML;
  const discographyTemplate = document.getElementById(
    'discography-template'
  ).innerHTML;
  const historyTemplate = document.getElementById('history-template').innerHTML;
  const connectTemplate = document.getElementById('connect-template').innerHTML;

  function loadContent(route) {
    switch (route) {
      case '/news':
        mainContainer.innerHTML = newsTemplate;
        break;
      case '/gallery':
        mainContainer.innerHTML = galleryTemplate;
        break;
      case '/discography':
        mainContainer.innerHTML = discographyTemplate;
        break;
      case '/history':
        mainContainer.innerHTML = historyTemplate;
        break;
      case '/connect':
        mainContainer.innerHTML = connectTemplate;
        break;
      default:
        mainContainer.innerHTML = homeTemplate;
    }
  }

  function handleNavigation(event) {
    event.preventDefault();
    const route = event.target.getAttribute('href');
    history.pushState(null, null, route);
    loadContent(route);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', handleNavigation);
  });

  const currentRoute = window.location.pathname;
  loadContent(currentRoute);
});
