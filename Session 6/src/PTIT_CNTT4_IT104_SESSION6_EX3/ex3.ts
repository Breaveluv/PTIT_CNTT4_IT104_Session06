abstract class Animal {
    abstract makeSound(): void;
    move(distance: number): void {
        console.log(`Động vật di chuyển ${distance} mét.`);
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Gâu gâu!");
    }
}

const dog = new Dog();
dog.makeSound();
dog.move(10);