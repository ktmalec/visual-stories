import './footer.css';

import template from './footer.html'
import {translate} from "../../helpers/templateHelpers";
import PubSub from "pubsub-js";

const translations = {
  pl: {
    ownership: 'Pomysł & Wykonanie: Katarzyna Malec',
    firstRule: 'Redukcja stresu',
    secondRule: 'Redukcja strat',
    thirdRule: 'Więcej pozytywnej energii',
    email: 'kontakt@katarzynamalec.pl',
    location: 'Lubelskie, Polska',
    copyright: 'Copyright © Visual Stories Online | Wszelkie prawa zastrzeżone',
  },
  en: {
    ownership: 'Idea & Execution: Katarzyna Malec',
    firstRule: 'Stress reduction',
    secondRule: 'Waste reduction',
    thirdRule: 'More positive energy',
    email: 'kontakt@katarzynamalec.pl',
    location: 'Lubelskie, Poland',
    copyright: 'Copyright © Visual Stories Online | All rights reserved',
  }
};

class Footer {

  constructor() {
    this.connect = this.connect.bind(this);
    this.render = this.render.bind(this);
  }

  connect() {
    document.querySelector("[data-id='app-nav-button-en']")
        .addEventListener("click", () => PubSub.publish('change-language', 'en'));
    document.querySelector("[data-id='app-nav-button-pl']")
        .addEventListener("click", () => PubSub.publish('change-language', 'pl'));
  }

  render() {
    this.rootNode = document.getElementById('footer');
    this.rootNode.innerHTML = translate(template, 'footer', translations);
  }
}

const footer = new Footer();

export {
  footer,
  translations
};
