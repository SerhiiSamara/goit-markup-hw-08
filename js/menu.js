(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__button--open'),
    closeMenuBtn: document.querySelector('.menu__button--close'),
    menu: document.querySelector('.menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
		refs.menu.classList.toggle('is-none');
		refs.menu.classList.toggle('menu-scroll');
    refs.body.classList.toggle('no-scroll');
  }
})();