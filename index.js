class Animals {
  constructor(name, gender) {
    if (this.constructor === Animals) {
    }
    this.name = name;
    this.gender = gender;
  }

  name = "All Animals differs with their name property";
  gender = "Animals still falls under male and female";

  eat() {
    console.log("All animals eat");
  }

  movement() {
    console.log("All animals do move");
  }
}

class Invertebrates extends Animals {
  #nobackbone;
  #areColdBlooded;

  constructor(name, gender, nobackbone, areColdBlooded) {
    super(name, gender);
    (this.#nobackbone = nobackbone), (this.#areColdBlooded = areColdBlooded);
  }
  // defining the General properties of Invertebrates
  properties() {
    if ((this.#nobackbone = true)) {
      console.log("Invertebrates have no backbone");
    }

    if ((this.#areColdBlooded = true)) {
      console.log("Invertebrates are cold-blooded");
    }
  }

  //   Method definition
  eat() {
    console.log("All invertebrates eat");
  }

  reproduction() {
    console.log("Invertebrates reproduce sexually");
  }
}

const invertebrates = new Invertebrates();
invertebrates.reproduction();
invertebrates.properties();
invertebrates.eat();

class Vertebrates extends Animals {
  #hasbackbone;
  #closedcirculatorysystem;

  constructor(name, gender, hasbackbone, closedcirculatorysystem) {
    super(name, gender);

    this.#hasbackbone = hasbackbone;
    this.#closedcirculatorysystem = closedcirculatorysystem;
  }

  properties() {
    if ((this.#hasbackbone = true)) {
      console.log("All vertebrates   has backbone");
    }
    if ((this.#closedcirculatorysystem = true)) {
      console.log("All vertebrates have a  closed circulatory system");
    }
  }
  eat() {
    console.log("All vertebrates eats");
  }
}

const vertebrate = new Vertebrates();
vertebrate.properties();
vertebrate.eat();

class Fish extends Vertebrates {
  #hastwochamberedheart;
  #Noeyelids;

  constructor(hastwochamberedheart, Noeyelids, name, gender) {
    super(name, gender);
    this.#hastwochamberedheart = hastwochamberedheart;
    this.#Noeyelids = Noeyelids;
  }
  coldBlooded() {
    console.log("Fish are cold blooded");
  }

  fishProperties() {
    if ((this.#hastwochamberedheart = true)) {
      console.log("All fishes has two chambered heart");
    }
  }

  breathe() {
    console.log("All Fishes breathe using their gills");
  }
}
const nimo = new Fish();
nimo.breathe();
nimo.fishProperties();
nimo.coldBlooded();

class Aves extends Vertebrates {
  #hasafourchamberedheart;
  #hasabeakwithnoteeth;
  constructor(hasafourchamberedheart, hasabeakwithnoteeth, name, gender) {
    super(name, gender);
    this.#hasafourchamberedheart = hasafourchamberedheart;
    this.#hasabeakwithnoteeth = hasabeakwithnoteeth;
  }

  avesProperties() {
    if ((this.#hasafourchamberedheart = true)) {
      console.log("All Aves has four chambered heart");
    }
  }

  highMetabolism() {
    console.log("Aves have a high matabolism");
  }
}
const aves = new Aves();
aves.avesProperties();
aves.highMetabolism();

class Anthroproda extends Invertebrates {
  #possessexoskeleton;
  #Segmentedbodies;

  constructor(name, gender, possessexoskeleton, Segmentedbodies) {
    super(name, gender);
    this.#possessexoskeleton = possessexoskeleton;
    this.#Segmentedbodies = Segmentedbodies;
  }

  properties() {
    if ((this.#Segmentedbodies = true)) {
      console.log("Anthropods  have Segmentedbodies");
    }
    if ((this.#possessexoskeleton = true)) {
      console.log("Anthropods   possess exoskeleton");
    }
  }

  coldBlooded() {
    console.log("Anthropods are cold blooded");
  }

  hasMultipleLegs() {
    console.log("Most arthropods have multiple legs");
  }
}
const anthropod = new Anthroproda();
anthropod.hasMultipleLegs();
anthropod.properties();

class Amphibians extends Vertebrates {
  #hasPrimitivelungs;
  #dualHabitat;
  constructor(hasPrimitivelungs, dualHabitat, name, gender) {
    super(name, gender);
    this.#hasPrimitivelungs = hasPrimitivelungs;
    this.#dualHabitat = dualHabitat;
  }
  properties() {
    if ((this.#dualHabitat = true)) {
      console.log("Amphibians lives on both land and water");
    }
    if ((this.#hasPrimitivelungs = true)) {
      console.log("Amphibians has Primitive lungs");
    }
  }
  coldBlooded() {}
  externalEggFertilization() {
    console.log("Amphibians fertilizes their eggs externally");
  }
}
const amphibian = new Amphibians();
amphibian.properties();
amphibian.externalEggFertilization();
amphibian.coldBlooded();

class Mammals extends Vertebrates {
  #hasSpecializedteeth;
  #threeMiddleEarBones;

  constructor(hasSpecializedteeth, threeMiddleEarBones, name, gender) {
    super(name, gender);
    this.#hasSpecializedteeth = hasSpecializedteeth;
    this.#threeMiddleEarBones = threeMiddleEarBones;
  }

  Properties() {
    if ((this.#hasSpecializedteeth = true)) {
      console.log("Mammals  has Specialized teeth");
    }
    if ((this.#threeMiddleEarBones = true)) {
      console.log("Mammals have three Middle Ear Bones");
    }
  }

  sight() {
    console.log("Mammals possess two eyes for sight");
  }
}

const mam = new Mammals();
mam.properties();
mam.sight();

class Reptiles extends Vertebrates {
  #fertilizeEggsInternally;
  #hasScales;
  constructor(fertilizeEggsInternally, hasScales, name, gender) {
    super(name, gender);
    this.#fertilizeEggsInternally = fertilizeEggsInternally;
    this.#hasScales = hasScales;
  }

  reptileProperties() {
    if ((this.#fertilizeEggsInternally = true)) {
      console.log("This reptile sabi");
    }

    if ((this.hasScales = true)) {
      console.log("This reptile fit be crocodile");
    }
  }
  coldBlooded() {
    console.log("Reptiles are cold blooded");
  }
}
const reptile = new Reptiles();
reptile.reptileProperties();
reptile.coldBlooded();
