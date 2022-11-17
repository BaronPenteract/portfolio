/* burger */
let headerElement = document.querySelector('.header');
let burgerButtonElement = headerElement.querySelector('.burger');
let headerNavElement = headerElement.querySelector('.nav');
let profileElement = document.querySelector('.profile');
let profileOverlayElement = profileElement.querySelector('.profile__overlay');

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
