const openMenuBtnRef = document.querySelector('[data-open-menu-button]');
const closeMenuBtnRef = document.querySelector('[data-close-menu-button]');
const ctaHeroBtn = document.querySelector('.hero__btn');
const mobileMenuRef = document.querySelector('[data-menu]');

const TABLET_WIDTH = 767;

openMenuBtnRef.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';

  mobileMenuRef.classList.add('is-open');
});

closeMenuBtnRef.addEventListener('click', () => {
  document.body.style.overflow = 'auto';

  mobileMenuRef.classList.remove('is-open');
});

window.addEventListener('resize', () => checkClientViewPort(this));

checkClientViewPort(this);

function checkClientViewPort(e) {
  const userViewPortWidth = e.innerWidth;

  if (userViewPortWidth > TABLET_WIDTH) {
    ctaHeroBtn.classList.remove('c-btn--dark');
  } else {
    ctaHeroBtn.classList.add('c-btn--dark');
  }
}
