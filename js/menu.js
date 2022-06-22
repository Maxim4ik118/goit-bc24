(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    // const expanded =
    //   menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    //   menuBtnRef.setAttribute("aria-expanded", !expanded);

    menuBtnRef.classList.toggle("is-open");

    mobileMenuRef.classList.toggle("is-open");
  });
})();
