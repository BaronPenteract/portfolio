/* burger */
const burgerButtonElement = document.querySelector('.burger');
const profileElement = document.querySelector('.profile');
const profileOverlayElement = profileElement.querySelector('.profile__overlay');

/* ------------------------------------------------------------ */
/* burger */
export function activateBurger() {
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
}
