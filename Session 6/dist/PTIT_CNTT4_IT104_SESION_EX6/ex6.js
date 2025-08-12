let allStudents = [];
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    toString() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
class Classroom {
    constructor(name) {
        this.name = name;
        this.students = [];
    }
    showStudents() {
        console.log(`\nDanh sách học sinh trong lớp ${this.name}:`);
        if (this.students.length === 0) {
            console.log("Lớp chưa có học sinh.");
        }
        else {
            this.students.forEach(student => console.log(student.toString()));
        }
    }
    addStudent(student) {
        this.students.push(student);
        console.log(`Đã thêm ${student.getName()} vào lớp ${this.name}`);
    }
    filterStudent(id) {
        const foundStudents = this.students.filter(student => student.getId() === id);
        if (foundStudents.length === 0) {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp ${this.name}`);
        }
        else {
            console.log(`\nHọc sinh với ID ${id} trong lớp ${this.name}:`);
            foundStudents.forEach(student => console.log(student.toString()));
        }
        return foundStudents;
    }
    addStudentInClass(student) {
        const index = allStudents.indexOf(student);
        if (index !== -1) {
            this.addStudent(student);
            allStudents.splice(index, 1);
            console.log(`Học sinh ${student.getName()} đã được xóa khỏi mảng tất cả học sinh.`);
        }
        else {
            console.log(`Học sinh ${student.getName()} không có trong mảng tất cả học sinh.`);
        }
    }
}
const student1 = new Student(1, "Nguyen Van A");
const student2 = new Student(2, "Tran Thi B");
const student3 = new Student(3, "Le Van C");
const student4 = new Student(4, "Pham Thi D");
const student5 = new Student(5, "Hoang Van E");
const student6 = new Student(6, "Vo Thi F");
allStudents.push(student1, student2, student3, student4, student5, student6);
const classroom1 = new Classroom("Lớp A");
const classroom2 = new Classroom("Lớp B");
classroom1.addStudentInClass(student1);
classroom1.addStudentInClass(student2);
classroom1.addStudentInClass(student3);
classroom2.addStudentInClass(student4);
classroom2.addStudentInClass(student5);
classroom2.addStudentInClass(student6);
classroom1.showStudents();
classroom2.showStudents();
classroom1.filterStudent(1);
classroom2.filterStudent(4);
console.log("\nDanh sách tất cả học sinh còn lại:");
if (allStudents.length === 0) {
    console.log("Không còn học sinh trong mảng allStudents.");
}
else {
    allStudents.forEach(student => console.log(student.toString()));
}
