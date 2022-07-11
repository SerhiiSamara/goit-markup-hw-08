(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		window: document.querySelector("[data-window]"),
		body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
		refs.modal.classList.toggle("is-hidden");
		refs.window.classList.toggle("is-scroll");
		refs.body.classList.toggle('no-scroll');
  }
})();
