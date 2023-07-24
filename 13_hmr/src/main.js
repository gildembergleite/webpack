import alertMsg from "./msg"

const body = document.querySelector('body')
const h1 = document.createElement('h1')
h1.appendChild(document.createTextNode('HMR'))
body.appendChild(h1)

if(module.hot) {
  module.hot.accept('./msg.js', function() {
    console.log('testing')
    alertMsg()
  })
}