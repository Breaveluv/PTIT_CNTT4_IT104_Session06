class Book {
    private id: number;
    private title: string;
    private author: string;
    private stock: number;
    private status: string;

    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }

    public getId(): number {
         return this.id;
         }
    public getTitle(): string {
         return this.title;
         }
    public getAuthor(): string {
         return this.author;
         }
    public getStock(): number {
         return this.stock;
         }
    public getStatus(): string {
         return this.status;
         }
    public setStock(stock: number): void { 
        this.stock = stock;
     }
    public setStatus(status: string): void {
         this.status = status;
         }
    public toString(): string {
         return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Stock: ${this.stock}, Status: ${this.status}`;
         }
}

class Member {
    private id: number;
    private name: string;
    private contact: string;
    private lendedBooks: LendedBook[];
    private status: string;

    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }

    public getId(): number {
         return this.id;
         }
    public getName(): string {
         return this.name;
         }
    public getContact(): string {
         return this.contact;
         }
    public getLendedBooks(): LendedBook[] {
         return this.lendedBooks;
         }
    public getStatus(): string {
         return this.status;
         }
    public setStatus(status: string): void {
         this.status = status;
         }
    public addLendedBook(book: LendedBook): void {
         this.lendedBooks.push(book); 
        }
}

class LendedBook {
    private memberId: number;
    private bookId: number;
    private dueDate: Date;

    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }

    public getMemberId(): number { 
        return this.memberId
        ; }
    public getBookId(): number {
         return this.bookId;
         }
    public getDueDate(): Date {
         return this.dueDate; 
        }
    public toString(): string {
         return `Member ID: ${this.memberId}, Book ID: ${this.bookId}, Due Date: ${this.dueDate.toLocaleDateString()}`;
         }
}

class Library {
    private books: Book[];
    private members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    public addBook(book: Book): void {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.getTitle()} vào thư viện.`);
    }

    public showBooks(): void {
        console.log("\nDanh sách sách trong thư viện:");
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách.");
        } else {
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