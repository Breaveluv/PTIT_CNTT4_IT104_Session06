class _Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() { return this.id; }
    getTitle() { return this.title; }
    getAuthor() { return this.author; }
    getStock() { return this.stock; }
    getStatus() { return this.status; }
    setStock(stock) { this.stock = stock; }
    setStatus(status) { this.status = status; }
    toString() { return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Stock: ${this.stock}, Status: ${this.status}`; }
}
class _Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
    getId() { return this.id; }
    getName() { return this.name; }
    getContact() { return this.contact; }
    getLendedBooks() { return this.lendedBooks; }
    getStatus() { return this.status; }
    setStatus(status) { this.status = status; }
    addLendedBook(book) { this.lendedBooks.push(book); }
}
class _LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId() { return this.memberId; }
    getBookId() { return this.bookId; }
    getDueDate() { return this.dueDate; }
    toString() { return `Member ID: ${this.memberId}, Book ID: ${this.bookId}, Due Date: ${this.dueDate.toLocaleDateString()}`; }
}
class _Library {
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
    _registerMember(id, name, contact, status) {
        const member = new _Member(id, name, contact, status);
        this.members.push(member);
        console.log(`Đã đăng ký thành viên: ${name} vào thư viện.`);
    }
    _blockMember(id, newStatus) {
        const member = this.members.find(m => m.getId() === id);
        if (member) {
            member.setStatus(newStatus);
            console.log(`Đã thay đổi trạng thái thành viên ID ${id} thành: ${newStatus}.`);
        }
        else {
            console.log(`Không tìm thấy thành viên với ID ${id}.`);
        }
    }
    _showMembers() {
        console.log("\nDanh sách thành viên trong thư viện:");
        if (this.members.length === 0) {
            console.log("Thư viện chưa có thành viên.");
        }
        else {
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
