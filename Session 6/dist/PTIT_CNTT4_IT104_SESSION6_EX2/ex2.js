class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Công việc là ${this.type}`);
    }
}
class Parttime extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class fullTime extends Job {
    calculateSalary() {
        return 10000000;
    }
}
const partTime = new Parttime("Part-time", 40);
const fullTime1 = new fullTime("Full-time");
partTime.printType();
console.log(`Lương part-time: ${partTime.calculateSalary()} VND`);
fullTime1.printType();
console.log(`Lương full-time: ${fullTime1.calculateSalary()} VND`);
