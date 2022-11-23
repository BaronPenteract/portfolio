const formPost = document.querySelector('.posts__form');
const inputTextarea = formPost.querySelector('.posts__input');
const btnSubmit = formPost.querySelector('.posts__btn_type_submit');

inputTextarea.addEventListener('keydown', function() {
  setTimeout( function() {
    inputTextarea.style.cssText = 'height: ' + inputTextarea.scrollHeight + 'px';
  }, 1)
})

formPost.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('Добавлено)')
})
