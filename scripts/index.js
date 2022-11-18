/* burger */
const headerElement = document.querySelector('.header');
const burgerButtonElement = headerElement.querySelector('.burger');
const headerNavElement = headerElement.querySelector('.nav');
const profileElement = document.querySelector('.profile');
const profileOverlayElement = profileElement.querySelector('.profile__overlay');

/* header sublist */
const navLinkListElement = headerElement.querySelector('.nav__link_list');
const navSublistElement = headerElement.querySelector('.nav__sublist');

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

/* nav link list */
navLinkListElement.addEventListener('mouseover', function(e) {
  showSublist();
})
navLinkListElement.addEventListener('mouseout', function(e) {
  hideSublist();
})

navSublistElement.addEventListener('mouseover', function(e) {
  showSublist();
})
navSublistElement.addEventListener('mouseout', function(e) {
  hideSublist();
})

function showSublist() {
  navLinkListElement.classList.add('nav__link_active');
  navSublistElement.classList.add('nav__sublist_active');
}

function hideSublist() {
  navLinkListElement.classList.remove('nav__link_active');
  navSublistElement.classList.remove('nav__sublist_active');
}
/* ------------------------------------------------------------ */
