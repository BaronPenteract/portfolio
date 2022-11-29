/* header sublist */
const navPlaceHeaderElement = document.querySelector('.nav_place_header');
const navLinkListElement = navPlaceHeaderElement.querySelector('.nav__link_list');
const navSublistElement = navPlaceHeaderElement.querySelector('.nav__sublist');

/* ------------------------------------------------------------ */

/* nav link list */

function showSublist() {
  navLinkListElement.classList.add('nav__link_active');
  navSublistElement.classList.add('nav__sublist_active');
}

function hideSublist() {
  navLinkListElement.classList.remove('nav__link_active');
  navSublistElement.classList.remove('nav__sublist_active');
}
/* ------------------------------------------------------------ */
export function activateNavPlaceHeader() {
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
}
