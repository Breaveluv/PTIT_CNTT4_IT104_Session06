let _allStudents = [];
class _Student {
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
    _setName(newName) {
        this.name = newName;
    }
    _setId(newId) {
        this.id = newId;
    }
    toString() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
class _Classroom {
    constructor(name) {
        this.name = name;
        this._students = [];
    }
    showStudents() {
        console.log(`\nDanh sách học sinh trong lớp ${this.name}:`);
        if (this._students.length === 0) {
            console.log("Lớp chưa có học sinh.");
        }
        else {
            this._students.forEach(student => console.log(student.toString()));
        }
    }
    addStudent(student) {
        this._students.push(student);
        console.log(`Đã thêm ${student.getName()} vào lớp ${this.name}`);
    }
    filterStudent(id) {
        const foundStudents = this._students.filter(student => student.getId() === id);
        if (foundStudents.length === 0) {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp ${this.name}`);
        }
        else {
            console.log(`\nHọc sinh với ID ${id} trong lớp ${this.name}:`);
            foundStudents.forEach(student => console.log(student.toString()));
        }
        return foundStudents;
    }
    addStudentInClass(_student) {
        const index = _allStudents.indexOf(_student);
        if (index !== -1) {
            this.addStudent(_student);
            _allStudents.splice(index, 1);
            console.log(`Học sinh ${_student.getName()} đã được xóa khỏi mảng tất cả học sinh.`);
        }
        else {
            console.log(`Học sinh ${_student.getName()} không có trong mảng tất cả học sinh.`);
        }
    }
    deleteStudent(id) {
        const index = this._students.findIndex(_student => _student.getId() === id);
        if (index !== -1) {
            const _deletedStudent = this._students.splice(index, 1)[0];
            _allStudents.push(_deleteStudent);
            console.log(`Đã xóa ${_deletedStudent.getName()} khỏi lớp ${this.name} và thêm vào mảng tất cả học sinh.`);
        }
        else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp ${this.name}.`);
        }
    }
    updateStudent(id, newId, newName) {
        const student = this._students.find(_student => student.getId() === id);
        if (student) {
            if (newId !== undefined) {
                student._setId(newId);
            }
            if (newName !== undefined) {
                student._setName(newName);
            }
            console.log(`Đã cập nhật thông tin học sinh ID ${id} trong lớp ${this.name}.`);
        }
        else {
            console.log(`Không tìm thấy học sinh với ID ${id} trong lớp ${this.name}.`);
        }
    }
}
const student7 = new _Student(1, "Nguyen Van A");
const student8 = new _Student(2, "Tran Thi B");
const student9 = new _Student(3, "Le Van C");
const student10 = new _Student(4, "Pham Thi D");
const student11 = new _Student(5, "Hoang Van E");
const student12 = new _Student(6, "Vo Thi F");
_allStudents.push(student7, student8, student9, student10, student11, student12);
const _classroom1 = new _Classroom("Lớp A");
const _classroom2 = new _Classroom("Lớp B");
_classroom1.addStudentInClass(student7);
_classroom1.addStudentInClass(student8);
_classroom1.addStudentInClass(student9);
_classroom2.addStudentInClass(student10);
_classroom2.addStudentInClass(student11);
_classroom2.addStudentInClass(student12);
console.log("\nTrạng thái ban đầu:");
_classroom1.showStudents();
_classroom2.showStudents();
_classroom1.deleteStudent(2);
_classroom2.deleteStudent(5);
console.log("\nSau khi xóa:");
_classroom1.showStudents();
_classroom2.showStudents();
_classroom1.updateStudent(1, undefined, "Nguyen Van A Updated");
_classroom2.updateStudent(4, 40, "Pham Thi D Updated");
console.log("\nSau khi cập nhật:");
_classroom1.showStudents();
_classroom2.showStudents();
console.log("\nDanh sách tất cả học sinh còn lại:");
if (_allStudents.length === 0) {
    console.log("Không còn học sinh trong mảng allStudents.");
}
else {
    _allStudents.forEach(student => console.log(student.toString()));
}
