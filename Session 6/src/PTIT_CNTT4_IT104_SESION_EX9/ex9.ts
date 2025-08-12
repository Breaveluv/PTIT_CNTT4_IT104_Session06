class _Book {
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

    public getId(): number { return this.id; }
    public getTitle(): string { return this.title; }
    public getAuthor(): string { return this.author; }
    public getStock(): number { return this.stock; }
    public getStatus(): string { return this.status; }
    public setStock(stock: number): void { this.stock = stock; }
    public setStatus(status: string): void { this.status = status; }
    public toString(): string { return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Stock: ${this.stock}, Status: ${this.status}`; }
}

class _Member {
    private id: number;
    private name: string;
    private contact: string;
    private lendedBooks: _LendedBook[];
    private status: string;

    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }

    public getId(): number { return this.id; }
    public getName(): string { return this.name; }
    public getContact(): string { return this.contact; }
    public getLendedBooks(): _LendedBook[] { return this.lendedBooks; }
    public getStatus(): string { return this.status; }
    public setStatus(status: string): void { this.status = status; }
    public addLendedBook(book: _LendedBook): void { this.lendedBooks.push(book); }
}

class _LendedBook {
    private memberId: number;
    private bookId: number;
    private dueDate: Date;

    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }

    public getMemberId(): number { return this.memberId; }
    public getBookId(): number { return this.bookId; }
    public getDueDate(): Date { return this.dueDate; }
    public toString(): string { return `Member ID: ${this.memberId}, Book ID: ${this.bookId}, Due Date: ${this.dueDate.toLocaleDateString()}`; }
}

class _Library {
    private books: _Book[];
    private members: _Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    public addBook(book: _Book): void {
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

    public _registerMember(id: number, name: string, contact: string, status: string): void {
        const member = new _Member(id, name, contact, status);
        this.members.push(member);
        console.log(`Đã đăng ký thành viên: ${name} vào thư viện.`);
    }

    public _blockMember(id: number, newStatus: string): void {
        const member = this.members.find(m => m.getId() === id);
        if (member) {
            member.setStatus(newStatus);
            console.log(`Đã thay đổi trạng thái thành viên ID ${id} thành: ${newStatus}.`);
        } else {
            console.log(`Không tìm thấy thành viên với ID ${id}.`);
        }
    }

    public _showMembers(): void {
        console.log("\nDanh sách thành viên trong thư viện:");
        if (this.members.length === 0) {
            console.log("Thư viện chưa có thành viên.");
        } else {
            this.members.forEach(member => console.log(`ID: ${member.getId()}, Name: ${member.getName()}, Contact: ${member.getContact()}, Status: ${member.getStatus()}`));
        }
    }
}

const _library = new _Library();

const book4 = new _Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 5, "Có sẵn");
const book5 = new _Book(2, "1984", "George Orwell", 3, "Có sẵn");
const book6 = new _Book(3, "To Kill a Mockingbird", "Harper Lee", 4, "Có sẵn");

_library.addBook(book4);
_library.addBook(book5);
_library.addBook(book6);

_library._registerMember(1, "Nguyen Van A", "a@example.com", "Đang hoạt động");
_library._registerMember(2, "Tran Thi B", "b@example.com", "Đang hoạt động");

_library._blockMember(1, "Bị khóa");

_library._showMembers();
_library.showBooks();