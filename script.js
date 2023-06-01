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
    for(let book of myLibrary){
        const card = document.createElement('div')
        card.classList.add('book')

        const inf = document.createElement('p')
        inf.textContent = book.info()
        card.classList.add('info')
        card.appendChild(inf)

        const container = document.getElementById('books')
        container.appendChild(card)
    }
}

let b1 = new Book('book 1', 'brian', 50, false)
let b2 = new Book('book 2', 'betsy', 100, true)
let b3 = new Book('book 3', 'sean', 150, true)

addBookToLibrary(b1)
addBookToLibrary(b2)
addBookToLibrary(b3)

displayBooks()