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