abstract class Job{
    type:string;
    constructor(type:string){
        this.type=type;
    }
     public printType():void{
        console.log(`Công việc là ${this.type}`);
        
    }
    abstract calculateSalary():number
        
    
}
class Parttime extends Job{
    public workingHour:number;
    constructor(type:string,workingHour:number){
        super(type);
        this.workingHour=workingHour;
    }
    public calculateSalary():number{
        return 30000*this.workingHour;
    }

}
class fullTime extends Job{
     public calculateSalary():number{
        return 10000000;
    }
}
const partTime = new Parttime("Part-time", 40);
const fullTime1 = new fullTime("Full-time");

partTime.printType();
console.log(`Lương part-time: ${partTime.calculateSalary()} VND`);

fullTime1.printType();
console.log(`Lương full-time: ${fullTime1.calculateSalary()} VND`);