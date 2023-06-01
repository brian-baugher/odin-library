
let myLibrary = [];

/**
 * 
 * @param {String} title 
 * @param {String} author 
 * @param {Number} pages 
 * @param {boolean} read 
 */
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if(read){
            return `${this.title} by ${this.author}, ${this.pages} pages, read`
        }
        else{
            return `${this.title} by ${this.author}, ${this.pages} pages, not yet read`
        }
    }
}
/**
 * 
 * @param {Book} book 
 */
function addBookToLibrary(book){
    myLibrary.push(book)
}

function displayBooks(){
    const container = document.getElementById('books')
    const boxes = document.querySelectorAll('#books *')
    boxes.forEach((x)=>{x.remove()})
    for(let book of myLibrary){
        const card = document.createElement('div')
        card.classList.add('book')

        const inf = document.createElement('p')
        inf.textContent = book.info()
        card.classList.add('info')
        card.appendChild(inf)

        container.appendChild(card)
    }
}

const form = document.getElementById('new-book-form')
form.style.display = 'none'

const title = document.getElementById('title')

function openForm(){
    form.style.display = 'flex'
    form.style.flexDirection = 'column'
}

const subBtn = document.querySelector('.submit-btn')

const newBook = document.getElementById('new-book')
newBook.addEventListener('click', openForm)

let b1 = new Book('book 1', 'brian', 50, false)
let b2 = new Book('book 2', 'betsy', 100, true)
let b3 = new Book('book 3', 'sean', 150, true)

addBookToLibrary(b1)
addBookToLibrary(b2)
addBookToLibrary(b3)
addBookToLibrary(b3)
addBookToLibrary(b3)

subBtn.addEventListener('click', (eve)=>{
    eve.preventDefault()
    form.style.display = 'none'
    let temp = new Book(title.value, 'h', 4, false)
    console.log(temp)
    addBookToLibrary(temp)
    displayBooks()
})

displayBooks()