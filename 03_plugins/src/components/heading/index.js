import './style.css'

export default class Heading {
  create(title) {
    const h1 = document.createElement('h1')
    h1.innerText = title
    h1.classList.add('title')

    document.body.appendChild(h1)
  }
}
