import PubSub from "pubsub-js";
import i18next from "i18next";
import 'uikit';

import {initRoutes} from './routes'
import {initTranslations} from "./translations";
import './styles/styles.less'

initTranslations();

document.addEventListener("DOMContentLoaded", function () {
  initRoutes();
});

PubSub.subscribe('change-language', (event, language) => {
  i18next.changeLanguage(language).then(initRoutes)
})