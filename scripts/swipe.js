const storiesElement = document.querySelector('.stories');
const storiesContainer = storiesElement.querySelector('.stories__container');
const storiesElementPosXstart = storiesElement.offsetLeft;
const storiesElementPosXend = storiesElementPosXstart + storiesElement.offsetWidth;
const storiesContainerWidth = storiesContainer.offsetWidth;

let posX;
let posInit;
let posDelta = 0;
let posLeft = 0;


const getEvent = (e) =>  e.type.includes('touch') ? e.touches[0] : e;

function checkPosition() {
  let scroll = true;
  if (storiesContainer.offsetLeft > 0) {
    storiesContainer.style.left = 0;
    scroll = false;
  }

  if (storiesContainer.offsetLeft + storiesContainer.offsetWidth < storiesElement.offsetWidth) {
    storiesContainer.style.left = storiesElement.offsetWidth - storiesContainer.offsetWidth + 'px';
    scroll = false;
  }
  return scroll
}

function swipeStart(e) {
  let evt = getEvent(e);

  posInit = evt.clientX;

  posLeft = isFinite(posLeft) ? parseInt(storiesContainer.style.left) : 0;

  storiesElement.addEventListener('touchmove', swipeAction);
  storiesElement.addEventListener('mousemove', swipeAction);

  storiesElement.addEventListener('touchend', swipeEnd);
  storiesElement.addEventListener('mouseup', swipeEnd);
}

function swipeAction(e) {
  let evt = getEvent(e);

  posX = evt.clientX;
  posDelta = posX - posInit;

  storiesContainer.style.left = posDelta + posLeft + 'px';
}

function swipeEnd(e) {

  checkPosition();

  storiesElement.removeEventListener('touchmove', swipeAction);
  storiesElement.removeEventListener('mousemove', swipeAction);

  storiesElement.removeEventListener('touchend', swipeEnd);
  storiesElement.removeEventListener('mouseup', swipeEnd);
}

storiesElement.addEventListener('wheel', function(e) {
  e.preventDefault();
  let deltaX = e.wheelDelta > 0 ? 50 : -50;

  if ( !checkPosition() ) {
    posDelta = 0;
  };

  posDelta += deltaX;
  storiesContainer.style.left = posDelta + 'px';

  checkPosition();
})

storiesElement.addEventListener('touchstart', swipeStart);
storiesElement.addEventListener('mousedown', swipeStart);
