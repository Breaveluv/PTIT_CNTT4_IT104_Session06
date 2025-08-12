class Shappe {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shappe {
    constructor(name, withh, height) {
        super(name);
        this.withh = withh;
        this.height = height;
    }
    getSize() {
        return this.withh * this.height;
    }
    ;
}
const r = new Rectangle("rect1", 4, 5);
const a = new Rectangle("rect1", 5, 6);
console.log(r.getName(), r.getSize());
console.log(a.getName(), a.getSize());
