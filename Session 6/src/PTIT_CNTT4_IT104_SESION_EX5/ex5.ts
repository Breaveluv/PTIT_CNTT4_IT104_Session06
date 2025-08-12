interface changeSpeed {
    speedup():void;
    slowDown():void;
    stop():void;
}
class Vehicle implements changeSpeed{
    private speed:number;
    constructor(){
        this.speed=0;
    }
    speedup(): void{
        this.speed+=10;
        console.log(`Tăng tốc độ. Tốc độ hiện tại: ${this.speed}`);
        
    }
    slowDown():void{
        if(this.speed>0){
            this.speed-=5;
            console.log(`Giam toc do . Toc do hien tai la ${this.speed}`);
            
        }else{
            console.log(`Toc do bang 0`);
            
        }
        

        }
    stop(): void {
        this.speed=0;
        console.log(`Dung lai toc do bang 0`);
        
    }
    getSpeed():number{
        return this.speed;
    }
    }
    const myVehicle =new Vehicle();
    myVehicle.speedup();
    myVehicle.slowDown();
    myVehicle.stop();
