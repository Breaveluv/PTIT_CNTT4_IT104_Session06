abstract class Shappe{
    protected name:string;
    constructor(name:string){
        this.name=name;
    }
    public getName():string{
        return this.name;
    }
    public abstract getSize():number;
 }


class Rectangle extends Shappe{
    private withh:number;
    private height:number;
    constructor(name:string,withh:number,height:number){
        super(name);
        this.withh=withh;
        this.height=height;

    }
     public  getSize():number{
        return this.withh*this.height;
     };
 
}
const r = new Rectangle("rect1", 4, 5);
const a = new Rectangle("rect1", 5, 6);

console.log(r.getName(), r.getSize());
console.log(a.getName(), a.getSize());
