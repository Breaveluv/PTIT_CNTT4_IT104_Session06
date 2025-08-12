class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5.0);
const rectangle1 = new Rectangle1(4.0, 6.0);
console.log("Circle:");
console.log(`Area: ${circle.calculateArea().toFixed(2)}`);
console.log(`Perimeter: ${circle.calculatePerimeter().toFixed(2)}`);
console.log("\nRectangle:");
console.log(`Area: ${rectangle1.calculateArea().toFixed(2)}`);
console.log(`Perimeter: ${rectangle1.calculatePerimeter().toFixed(2)}`);
