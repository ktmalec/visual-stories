import template from './page1.html'
import './style.css'

export const page1View = {
  render: function () {
    document.getElementById('page').innerHTML = template
  }
}