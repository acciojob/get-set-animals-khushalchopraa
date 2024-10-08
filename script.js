class Animal {
    constructor(species) {
        this.species = species;
    }

    getSpecies() {
        return this.species;
    }

    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Cat extends Animal {
    purr() {
        console.log("purr");
    }
}

class Dog extends Animal {
    bark() {
        console.log("woof");
    }
}

// Example usage:
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof