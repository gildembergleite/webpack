import '../styles/button.scss'

export default class Button {
  create() {
    const button = document.createElement('button')
    button.innerText = 'Enter'
    button.classList.add('btn')

    document.body.appendChild(button)
  }
}
