(() => {
  const refs = {

    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {

    refs.body.classList.toggle('no-scroll');
  }
})();