import Title from './components/title'
import NavBar from '../public/files/navbar.html'
import Image from './components/image'
import Text from '../public/files/text.txt'
import Button from './components/button'
import Luke from '../public/files/luke.json'

const title = new Title()
title.create('Hello world!')

// Import HTML
document.body.innerHTML += NavBar

// Import IMG
const image = new Image()
image.insertImage()

// Import TXT
const p = document.createElement('p')
p.innerText = Text
document.body.appendChild(p)

// Import SASS
const button = new Button()
button.create()

// Babel Spread
const obj = { a: 1, b: 2, c: 3, d: 4 }
const { ...test } = obj
console.log(test)

// Import JSON
const ul = document.createElement('ul')
ul.classList.add('list')
document.body.appendChild(ul)

const name = document.createElement('li')
name.innerText = `Name: ${Luke.name}`

const height = document.createElement('li')
height.innerText = `Height: ${Luke.height}`

const eyeColor = document.createElement('li')
eyeColor.innerText = `Eye color: ${Luke.eye_color}`

const gender = document.createElement('li')
gender.innerText = `Gender: ${Luke.gender}`

document.querySelector('.list').appendChild(name)
document.querySelector('.list').appendChild(height)
document.querySelector('.list').appendChild(eyeColor)
document.querySelector('.list').appendChild(gender)
