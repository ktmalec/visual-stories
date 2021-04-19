import PubSub from 'pubsub-js';

import template from './nav.html'
import {translate} from "../../helpers/templateHelpers";

import './nav.less';


const translations = {
  pl: {
    page1: 'Produkty',
    page2: 'Nasza świadomość',
    english: 'ENG',
    polish: 'PL'
  },
  en: {
    page1: 'Products',
    page2: 'Roadmapa',
    english: 'ENG',
    polish: 'PL'
  }
};

class Nav {
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
    this.rootNode = document.getElementById('header');
    this.rootNode.innerHTML = translate(template, 'nav', translations);

    this.connect()
  }
}

const nav = new Nav();

export {
  nav,
  translations
};
