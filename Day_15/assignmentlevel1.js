//1. Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    get getName() {
        return this.name
    }
    get getAge() {
        return this.age
    }
    get getColor() {
        return this.color
    }
    get getLegs() {
        return this.legs
    }
    set setName(name) {
        this.name = name
    }
    set setAge(age) {
        this.age = age
    }
    set setColor(color) {
        this.color = color
    }
    set setLegs(legs) {
        this.legs = legs
    }
    getAnimalInfo() {
        let info =`The Name of animal is ${this.name} its ${this.age} yeras old and its of ${this.color} colour and it has ${this.legs} of legs`
        return info
    }
}

let animal1=new Animal('Tiger',15,'Yellow',4)
console.log(animal1)
console.log(animal1.getAnimalInfo())

let animal2=new Animal('Lion',20,'Yellow',4)
console.log(animal2.getAnimalInfo())

//2. Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal{
    constructor(name, age, color, legs,dogName){
        console.log('In The Dog Child Class')
        super(name, age, color, legs)
        this.dogName=dogName
    }
    getAnimalInfo() {
        let info =`The Name of Dog is ${this.dogName} it is a ${this.name} its ${this.age} yeras old and its of ${this.color} colour and it has ${this.legs} legs`
        return info
    }
}
let dog1=new Dog('Dog',4,'Greay and White',4,'Rubby')
console.log(dog1.getAnimalInfo())

class Cat extends Animal{
    constructor(name, age, color, legs,catName){
        console.log('In The Cat Child Class')
        super(name, age, color, legs)
        this.catName=catName
    }
    getAnimalInfo() {
        let info =`The Name of Cat is ${this.catName} it is a ${this.name} its ${this.age} yeras old and its of ${this.color} colour and it has ${this.legs} legs`
        return info
    }
}

let cat1=new Cat('Cat',4,'White',4,'Bokya')
console.log(cat1.getAnimalInfo())





