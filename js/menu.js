(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mobaile-menu-open]"),
      closeModalBtn: document.querySelector("[data-mobaile-menu-close]"),
      modal: document.querySelector("[data-mobaile-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  // (() => {
  //   const menuBtnRef = document.querySelector("[data-menu-button]");
  //   const mobileMenuRef = document.querySelector("[data-menu]");

  //   menuBtnRef.addEventListener("click",()=>{
  //     const expanded =
  //     menuBtnRef.classList("aria-expanded") === "true" || false

  //     menuBtnRef.classList.toggle("is-open");
  //     menuBtnRef.setAttribute("aria-expanded",!expanded);

  //     mobileMenuRef.classList.toggle("is-open");
  //   })
  // })();