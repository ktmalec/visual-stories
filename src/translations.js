import i18next from 'i18next';
import {translations as welcome} from './views/welcome';
import {translations as nav} from './views/nav';
import {translations as footer} from './views/footer';

const translations = {
  pl: Object.assign({},
    {nav: nav.pl},
    {welcome: welcome.pl},
    {footer: footer.pl}
  ),
  en: Object.assign({},
    {nav: nav.en},
    {welcome: welcome.en},
    {footer: footer.en}
  )
};

export const initTranslations = () => {
  i18next.init({
    lng: 'pl',
    debug: true,
    resources: translations
  });

  window.i18next = i18next;
};
