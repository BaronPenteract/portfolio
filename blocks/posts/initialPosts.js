export const topics = [
  'создание сайтов',
  'продвижение видео'
]

export const types = [
  'posts__item_type_text',
  'posts__item_type_image',
  'posts__item_type_video',
]

export const initialPosts = [
  {
    type: types[1],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    time: 'Thu Nov 24 2020 12:53:51 GMT+0700',
    media: {
      title: 'Eat, sleep, code, repeat.',
      url: 'https://cdn2.f-cdn.com/contestentries/215692/11659560/5550154bdddf5_thumb900.jpg',
    },
    topic: topics[0],
  },
  {
    type: types[1],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    time: 'Thu Nov 24 2020 12:53:51 GMT+0700',
    media: {
      title: 'Как я сходил на FrontEnd Conf 2021',
      url: 'images/posts/post-basic2.jpg',
    },
    topic: topics[0],
  },
  {
    type: types[2],
    text: undefined,
    media: {
      title: '2rbina2rista - brutality',
      url: 'https://www.youtube.com/embed/Gd2OapjhJwg',
    },
    time: 'Thu Nov 02 2020 10:03:51 GMT+0700',
  },
  {
    type: types[1],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    time: new Date() - 3000000,
    media: {
      title: 'Как писать код быстро и безболезненно?',
      url: '../images/posts/post-basic.jpg',
    },
    topic: topics[0],
  },
  {
    type: types[0],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.',
    time: new Date() - 200000,
    media: {
      title: undefined,
      url: undefined
    },
    topic: topics[0],
  },
]
