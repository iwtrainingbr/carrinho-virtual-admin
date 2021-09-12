document.getElementById('root').innerHTML = navbar();

const MENU = document.querySelectorAll('[data-component="menu"]');

function updateMenuItems() {
  MENU.forEach(item => {
    item.classList.remove('btn-dark');
    item.classList.add('btn-outline-dark');
  });
}

MENU.forEach(item => {
  item.addEventListener('click', () => {
    updateMenuItems();
    item.classList.remove('btn-outline-dark');
    item.classList.add('btn-dark');

    window.document.title = item.innerHTML;

    let action = item.getAttribute('data-action');

    window.history.pushState('', '', action);

    document.getElementById('content').innerHTML =  ROUTES[action];
  });
});
