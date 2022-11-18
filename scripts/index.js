/* burger */
const headerElement = document.querySelector('.header');
const burgerButtonElement = headerElement.querySelector('.burger');
const headerNavElement = headerElement.querySelector('.nav');
const profileElement = document.querySelector('.profile');
const profileOverlayElement = profileElement.querySelector('.profile__overlay');

/* ------------------------------------------------------------ */
/* burger */
burgerButtonElement.addEventListener('click', function(e) {
  e.preventDefault();

  burgerButtonElement.classList.toggle('burger_active');
  profileElement.classList.toggle('profile_active');
})

profileOverlayElement.addEventListener('click', function(e) {
  if (e.target === e.currentTarget) {
    burgerButtonElement.classList.toggle('burger_active');
    profileElement.classList.toggle('profile_active');
  }
})
/* ------------------------------------------------------------ */
