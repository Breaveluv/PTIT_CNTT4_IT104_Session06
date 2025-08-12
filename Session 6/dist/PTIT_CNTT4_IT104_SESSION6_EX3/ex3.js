class Animal {
    move(distance) {
        console.log(`Động vật di chuyển ${distance} mét.`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Gâu gâu!");
    }
}
const dog = new Dog();
dog.makeSound();
dog.move(10);
