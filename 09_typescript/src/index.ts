import Book from "./models/book";
const book = new Book('Dom Quixote', 100.00, 0.10)

const body = document.querySelector('body')

const h1 = document.createElement('h1')
h1.appendChild(document.createTextNode(`${book.name}`))

const p = document.createElement('p')
p.appendChild(document.createTextNode(`
  Valor do livro com desconto: R$ ${book.discountedPrice()}
`))

body?.append(h1)
body?.append(p)
