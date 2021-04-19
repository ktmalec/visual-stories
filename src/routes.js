import {easing, tween} from 'popmotion'
import {welcomeView} from "./views/welcome";
import {page1View} from "./views/page1";
import {page2View} from "./views/page2";
import {nav} from './views/nav'
import {footer} from "./views/footer";

const EXIT_DURATION = 200;

const routes = {
  '/': welcomeView,
  '/page1/': page1View,
  '/page2/': page2View
};

const exit = tween({
  from: {opacity: 1, x: 0, bodyBackgorund: '#FFF'},
  to: {opacity: 0, x: -100, bodyBackgorund: '#CCC'},
  duration: EXIT_DURATION
});

const enter = tween({
  from: {opacity: 0, x: 100, bodyBackgorund: '#CCC'},
  to: {opacity: 1, x: 0, bodyBackgorund: '#FFF'},
  duration: 600,
  ease: easing.backInOut
});

export function initRoutes() {

  nav.render()
  footer.render()

  // handle rendering views on URL changes
  window.addEventListener('popstate', function () {
    const contentElement = document.getElementById('page');

    exit.start(function (tween) {
      contentElement.style.transform = 'translateX(' + tween.x + 'px)';
      contentElement.style.opacity = tween.opacity;
      document.body.style.background = tween.bodyBackgorund;
    });

    setTimeout(function () {
      routes[window.location.hash.substring(1)].render();
      enter.start(function (tween) {
        contentElement.style.transform = 'translateX(' + tween.x + 'px)';
        contentElement.style.opacity = tween.opacity;
        document.body.style.background = tween.bodyBackgorund;
      });
    }, EXIT_DURATION);

  });

  // Go to welcome page when no hash is in the URL
  if (!window.location.hash) {
    window.location.hash = '/';
  } else {
    routes[window.location.hash.substring(1)].render()
  }
}

export function rerenderCurrentRoute() {
  routes[window.location.hash.substring(1)].render()
}