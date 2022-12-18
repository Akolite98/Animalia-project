This file contains the following:

AnimalKingdom.js: This [code file](index.js)models a simple Animal Kingdom class as shown in the picture
Animal Kingdom Classification

<img
src=“Animalia.png”
raw=true
alt=“Subject Pronouns”
style=“margin-right: 10px;”
/>

Click [here](https://cdn1.byjus.com/wp-content/uploads/2019/04/Animal-Kingdom-Classification-of-Animal-Kingdom.png) to view image

Click [here](https://byjus.com/biology/animal-kingdom/) to view image source

OOP paradigms were used to model this simple class to avoid repetition of code and to produce a well-structured and scalable code.

They include:

1. Inheritance
   An animal Parent class was created which all the classes inherited from to avoid re-implementing the same functionality, to make the code simplified making it easier to make changes to the code, and it allowed me to make use of another OOP paradign 'Polymorphism'.

2. Abstraction
   Abstract methods were used in the neccessary places to prevent misuse of some classes.

3. Polymorphism
   Polymorphism was used to enforce method overriding in to classes that had different but similar methods.

4. Encapsulation
   Encapsulation was used to improve code security by making some methods and properties of an object private.

How To Use
Clone the repo and cd into the directory such that you are in Animal Kingdom.
To run the solution, make sure you have nodejs installed.
Use the following command in your terminal.
node AnimalKingdom.js
You can play around with the code to see what the class can and cannot do.
Expected Output
If the AnimalKingdom.js is run as it is on this repository, the results look like this:

--> Animal Kingdom> node .\AnimalKingdom.js
My name is mandy.
I am a Butterfly.
I belong to class Arthropoda.
I have no backbone and I am cold blooded.  
My class is the only class without a backbone.

My name is nimo.
I am a Catfish.
I belong to class Fish.
I have a backbone and I am cold blooded.
I cannot live without water.

My name is toddler.
I am a Frog.
I belong to class Amphibia.
I have a backbone and I am cold blooded.
I live both in water and in land.

My name is swarvey.
I am a Eagle.
I belong to class AVES.
I have a backbone and I am warm blooded.
I have no teeth.

My name is iceage.
I am a Cat.
I belong to class Mammal.
I have a backbone and I am warm blooded.
I have 4 limbs.

My name is musk.
I am a Tortoise.
I belong to class Reptile.
I have a backbone and I am cold blooded.
My class has the longest life span.
