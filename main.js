import './style.css'
import javascriptLogo from './javascript.svg'

const galleryEl = document.querySelector('#app > div');

const scrollToStart = (el) => el.style.marginLeft = '0px';

const scrollToEnd = (el) => el.style.marginLeft = 
-1 * (el.clientWidth - document.body.clientWidth) + 'px'

const populateChildren = (el) => {
  const imgEl = document.createElement('div');
  imgEl.innerHTML = `<img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />`;

  for (let i = 0; i < 7 * 2; i++) {
    el.appendChild(imgEl.cloneNode(true));
  }
}

const handleScroll = (el) => {
  el.addEventListener('wheel', e => {
    e.preventDefault();

    if (e.shiftKey && e.deltaY > 0) {
      scrollToEnd(el);
    } else if (e.shiftKey && e.deltaY < 0) {
      scrollToStart(el);
    } else if (e.deltaX < 0 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      scrollToEnd(el);
    } else if (e.deltaX > 0 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      scrollToStart(el);
    }
  });
}

populateChildren(galleryEl)
handleScroll(galleryEl)
