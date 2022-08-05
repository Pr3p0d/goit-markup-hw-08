(() => {
    const refs = {
      openModalBtn: document.querySelector('.header-mobile__menu-btn'),
      closeModalBtn: document.querySelector('.mobile-menu__close-btn'),
      modal: document.querySelector('.mobile-menu'),
      body: document.querySelector('body'),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle('.no-scroll');
    }
  })();