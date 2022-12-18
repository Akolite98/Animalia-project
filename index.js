class Animal {
  //PRIVATE PROPERTIES
  #name;
  #type;

  constructor(name, type) {
    if (new.target === Animal) {
      throw new Error("Animal class cannot be called or instantiated");
    }
    this.#name = name;
    this.#type = type;
  }

  //GETTERS AND SETTERS FOR THE PRIVATE FIELDS
  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get type() {
    return this.#type;
  }

  set type(type) {
    this.#type = type;
  }

  //METHOD THAT SETS THE BLOODTEMPERATURE PROPERTY
  bloodTemp(temp) {
    if (temp === "warm") {
      this["bloodTemp"] = "warm blooded";
    } else if (temp === "cold") {
      this["bloodTemp"] = "cold blooded";
    }
  }

  //PRIVATE METHOD THAT PRINTS EACH OBJECTS PROPERTY
  #myProperties() {
    const stg = this.constructor.hasBackbone ? "a" : "no";
    return `My name is ${this.name}.\nI am a ${this.type}.\nI belong to class ${this.constructor.name}.\nI have ${stg} backbone and I am ${this["bloodTemp"]}.`;
  }

  //PUBLIC METHOD THAT GETS THE PRIVATE myProperties() METHOD
  get myProperties() {
    return this.#myProperties;
  }

  //ABSTRACT METHOD THAT MUST BE OVERRIDEN IN THE CHILD CLASSES BEFORE USE
  allProperties() {
    throw new Error(
      "The myProperties() method must be overriden in a subclass"
    );
  }
}

//SUB-CLASSES OF THE Animal PARENT CLASS
class NoBackbone extends Animal {
  static hasBackbone = false;

  constructor(name, type) {
    if (new.target === NoBackbone) {
      throw new Error("NoBackbone class cannot be called or instantiated");
    }
    super(name, type);
  }
}

class Backbone extends Animal {
  static hasBackbone = true;

  constructor(name, type) {
    if (new.target === Backbone) {
      throw new Error("backbone class cannot be called or instantiated");
    }
    super(name, type);
  }
}

//CHILD CLASSES OF NoBackbone AND Backbone PARENT CLASSES
class Arthropoda extends NoBackbone {
  constructor(name, type) {
    super(name, type);
    this.bloodTemp("cold");
  }

  allProperties() {
    return (
      this.myProperties() + "\nMy class is the only class without a backbone.\n"
    );
  }
}

class Fish extends Backbone {
  constructor(name, type) {
    super(name, type);
    this.bloodTemp("cold");
  }

  allProperties() {
    return this.myProperties() + "\nI cannot live without water.\n";
  }
}

class Amphibia extends Backbone {
  constructor(name, type) {
    super(name, type);
    this.bloodTemp("cold");
  }

  allProperties() {
    return this.myProperties() + "\nI live both in water and on land.\n";
  }
}

class Reptile extends Backbone {
  constructor(name, type) {
    super(name, type);
    this.bloodTemp("cold");
  }

  allProperties() {
    return this.myProperties() + "\nMy class has the longest life span.\n";
  }
}

class AVES extends Backbone {
  constructor(name, type) {
    super(name, type);
    this.bloodTemp("warm");
  }

  allProperties() {
    return this.myProperties() + "\nI have no teeth.\n";
  }
}

class Mammal extends Backbone {
  constructor(name, type) {
    super(name, type);
    this.bloodTemp("warm");
  }

  allProperties() {
    return this.myProperties() + "\nI have 4 limbs.\n";
  }
}

// // CANNOT CREATE THE FOLLOWING OBJECTS FROM ABSTRACT CLASSES
// const animal = new Animal();
// const noBackbone = new NoBackbone();
// const backbone = new Backbone();

//OBJECTS CREATED FROM THE CHILD CLASSES
const mandy = new Arthropoda("mandy", "Butterfly");
const nimo = new Fish("nimo", "Catfish");
const toddler = new Amphibia("toddler", "Frog");
const musk = new Reptile("musk", "Tortoise");
const swarvey = new AVES("swarvey", "Eagle");
const iceage = new Mammal("iceage", "Cat");
const animals = [mandy, nimo, toddler, musk, swarvey, iceage];
animals.forEach((animal) => {
  console.log(animal.allProperties()) + "\n";
});
