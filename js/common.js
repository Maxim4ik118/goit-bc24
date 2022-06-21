const openMenuBtnRef = document.querySelector('[data-open-menu-button]');
const closeMenuBtnRef = document.querySelector('[data-close-menu-button]');

const mobileMenuRef = document.querySelector('[data-menu]');

openMenuBtnRef.addEventListener('click', () => {
  // const visible =
  //   openMenuBtnRef.getAttribute('aria-visible') === 'true' || false;

  // openMenuBtnRef.setAttribute('aria-visible', visible);
  document.body.style.overflow = 'hidden';

  mobileMenuRef.classList.add('is-open');
});

closeMenuBtnRef.addEventListener('click', () => {
  // const visible =
  //   closeMenuBtnRef.getAttribute('aria-visible') === 'true' || false;

  // closeMenuBtnRef.setAttribute('aria-visible', visible);
  document.body.style.overflow = 'auto';

  mobileMenuRef.classList.remove('is-open');
});
