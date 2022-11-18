const root = document.querySelector(':root');
const themeButtonElement = document.querySelector('.theme');
let theme = 0;

const themes = {
  '--main-text-color': ['#fff', '#000'],
  '--accent-color': ['#3137c9', '#00c0ff'],
  '--page-bg-color': ['#181818', '#e5e5e5'],
  '--border-color': ['#1c1c1c', '#e1e1e1'],
  '--shadow-color': ['rgba(0, 0, 0, 0.3)', 'rgb(141 141 141 / 30%)'],

  '--works-button-color': ['#ED3024', '#ff5247'],
  '--profile-subtitle-color': ['#dedede', '#343434'],


  '--header-bg-color': ['#0d0d0d', '#f3f3f3'],
  '--element-bg-color': ['#202020', '#d5d5d5'],
};


themeButtonElement.addEventListener('click', function() {
  theme = theme == 1 ? 0 : 1;

  for ( let attribute in themes) {
    root.style.setProperty(attribute, themes[attribute][theme]);
  }
})
