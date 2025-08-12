interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    public calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    public calculatePerimeter(): number { 
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle1 implements Geometry {
    private width: number;    
    private height: number;   

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public calculateArea(): number {
        return this.width * this.height;
    }

    public calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle: Circle = new Circle(5.0);
const rectangle1: Rectangle1 = new Rectangle1(4.0, 6.0);

console.log("Circle:");
console.log(`Area: ${circle.calculateArea().toFixed(2)}`);
console.log(`Perimeter: ${circle.calculatePerimeter().toFixed(2)}`);

console.log("\nRectangle:");
console.log(`Area: ${rectangle1.calculateArea().toFixed(2)}`);
console.log(`Perimeter: ${rectangle1.calculatePerimeter().toFixed(2)}`);