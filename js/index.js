document.getElementById('root').innerHTML = navbar();

const MENU = document.querySelectorAll('[data-component="menu"]');

function updateMenuItems() {
  MENU.forEach(item => {
    if (item.hasAttribute('data-menu-item')) {
      let menuItem = item.getAttribute('data-menu-item')

      document.querySelector(`[data-menu-group="${menuItem}"]`).classList.add('btn-outline-dark');
      document.querySelector(`[data-menu-group="${menuItem}"]`).classList.remove('btn-dark');
    } else {
      item.classList.remove('btn-dark');
      item.classList.add('btn-outline-dark');
    }
  });
}

MENU.forEach(item => {
  item.addEventListener('click', () => {
    updateMenuItems();

    if (item.hasAttribute('data-menu-item')) {
      let menuItem = item.getAttribute('data-menu-item')

      document.querySelector(`[data-menu-group="${menuItem}"]`).classList.remove('btn-outline-dark');
      document.querySelector(`[data-menu-group="${menuItem}"]`).classList.add('btn-dark');
    } else {
      item.classList.remove('btn-outline-dark');
      item.classList.add('btn-dark');
    }


    window.document.title = item.innerHTML;

    let action = item.getAttribute('data-action');

    window.history.pushState('', '', action);

    document.getElementById('content').innerHTML =  ROUTES[action];
  });
});
