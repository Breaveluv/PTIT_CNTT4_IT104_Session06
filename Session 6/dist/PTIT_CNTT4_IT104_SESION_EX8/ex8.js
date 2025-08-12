class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
    setStock(stock) {
        this.stock = stock;
    }
    setStatus(status) {
        this.status = status;
    }
    toString() {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Stock: ${this.stock}, Status: ${this.status}`;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    getLendedBooks() {
        return this.lendedBooks;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    addLendedBook(book) {
        this.lendedBooks.push(book);
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId() {
        return this.memberId;
    }
    getBookId() {
        return this.bookId;
    }
    getDueDate() {
        return this.dueDate;
    }
    toString() {
        return `Member ID: ${this.memberId}, Book ID: ${this.bookId}, Due Date: ${this.dueDate.toLocaleDateString()}`;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.getTitle()} vào thư viện.`);
    }
    showBooks() {
        console.log("\nDanh sách sách trong thư viện:");
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách.");
        }
        else {
            this.books.forEach(book => console.log(book.toString()));
        }
    }
}
const library = new Library();
const book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 5, "Có sẵn");
const book2 = new Book(2, "1984", "George Orwell", 3, "Có sẵn");
const book3 = new Book(3, "To Kill a Mockingbird", "Harper Lee", 4, "Có sẵn");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
