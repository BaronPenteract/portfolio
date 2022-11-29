import { initialPosts } from "./initialPosts.js";
import { topics } from "./initialPosts.js";
import { types } from "./initialPosts.js";

const postsSection = document.querySelector('.posts');
const formPost = postsSection.querySelector('.posts__form');
const inputTextarea = formPost.querySelector('.posts__input');
const inputText = formPost.querySelector('.posts__input_type_text');
const btnAddMedia = formPost.querySelector('.posts__btn_type_add-media');

const postsList = postsSection.querySelector('.posts__list');
const postTemplate = postsSection.querySelector('#posts-form-add-template').content;

/* ---------------------СОЗДАНИЕ____ПОСТА--------------------------------- */
function createPost(postObj) {
  const postElement = postTemplate.cloneNode(true);
  const postImage = postElement.querySelector('.posts__image');
  const postIframe = postElement.querySelector('.posts__iframe');
  const postText = postElement.querySelector('.posts__text');
  const postTitle = postElement.querySelector('.posts__title');
  const postTime = postElement.querySelector('.posts__time');
  const postTopic = postElement.querySelector('.posts__topic');
  const postLink = postElement.querySelector('.posts__link');

  const timeOfPublish = new Date(postObj.time);

  postElement.querySelector('.posts__item').classList.add(postObj.type)

  const datatime = `${timeOfPublish.getFullYear()}-${timeOfPublish.getMonth() + 1}-${timeOfPublish.getDate()}T${timeOfPublish.getHours()}:${timeOfPublish.getMinutes()}:${timeOfPublish.getSeconds()}`;

  postTime.textContent = timeToText(timeOfPublish);
  postTime.setAttribute('datetime', datatime);


  if(postObj.media.title) {
    postTitle.textContent = postObj.media.title;
  } else {
    postTitle.remove();
  }

  if(postObj.text) {
    postText.textContent = postObj.text;
  } else {
    postText.remove();
  }

  if(postObj.type === 'posts__item_type_image') {
    postImage.src = postObj.media.url;
    postTopic.textContent = topics[0];
    postIframe.remove();
  } else {
    postImage.remove();
  }

  if(postObj.type === 'posts__item_type_video') {
    postIframe.src = postObj.media.url;
    postTopic.textContent = topics[1];
    postImage.remove();
  }

  if(postObj.type === 'posts__item_type_text') {
    postTopic.remove();
    postLink.remove();
    postIframe.remove();
    postImage.remove();
  }

  console.log(postObj.type);
  console.log('Пост создан');
  return postElement;
}
/* -------------------------------------------------------------------------------------- */

function showPost(postElement, wrapElement) {
  wrapElement.prepend(postElement);
}

function timeToText(timeOfPublish) {
  const nowTime = new Date();
  const timeText = `${timeOfPublish.getHours()}:${timeOfPublish.getMinutes()}:${timeOfPublish.getSeconds()} ${timeOfPublish.getDate()}.${timeOfPublish.getMonth() + 1}.${timeOfPublish.getFullYear()}`;

  const now = 60000;
  const fiveMins = 300000;
  const oneHour = 3600000;

  if (nowTime - timeOfPublish < now ) {
    return 'Только что'
  }

  if (nowTime - timeOfPublish < fiveMins ) {
    return 'Менее 5ти минут назад'
  }

  if (nowTime - timeOfPublish < oneHour ) {
    return 'Менее часа назад'
  }

  return timeText
}

export function activatePosts() {
  inputTextarea.addEventListener('keydown', function() {
    setTimeout( function() {
      inputTextarea.style.cssText = 'height: ' + inputTextarea.scrollHeight + 'px';
    }, 1)
  })

  let postTitlePromt,
      postUrlPromt;
  btnAddMedia.addEventListener('click', function() {
    postTitlePromt = prompt('Title', );
    postUrlPromt = prompt('URL', );
  })

  formPost.addEventListener('submit', function(e) {
    e.preventDefault();

    const post = {
      type: postUrlPromt ? types[1] : types[0],
      text: inputText.value,
      time: new Date(),
      media: {
        title: postTitlePromt,
        url: postUrlPromt,
      },
    };
    inputText.value = '';
    postTitlePromt = undefined;
    postUrlPromt = undefined;

    showPost(createPost(post), postsList);
    console.log('Добавлено.');
  })


  initialPosts.forEach(function(post) {
    showPost(createPost(post), postsList)
  })
}
