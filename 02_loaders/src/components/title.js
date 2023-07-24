import '../styles/style.css'

export default class Title {
  create(title) {
    const h1 = document.createElement('h1')
    h1.innerText = title
    h1.classList.add('main-title')

    document.body.appendChild(h1)
  }
}
