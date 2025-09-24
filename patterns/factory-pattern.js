const superHero1 = {
  name: "Thor",
  talk: function () {
    console.log(`Hi am ${this.name}`);
  },
};

const superHero2 = {
  name: "Iron Man",
  talk: function () {
    console.log(`Hi am ${this.name}`);
  },
};

superHero1.talk();
superHero2.talk();

// first issue is that name property is publicly
// accessible and can be modified by anyone.
// Second, issue is that we have multiple
// talk methods doing the same thing.
superHero1.name = "Loki";
superHero1.talk();

// We can avoid this behaviour by introducing
// factory, pattern.
// What is factory pattern though?
// Cosider it like a factory where all the raw material
// gets converted to final product with a single
// operating place i.e the factory itself.

const SuperHeroes = (name) => {
  return {
    talk: () => `Hi, I am ${name}`,
  };
};

const ironman = SuperHeroes("Ironman"); // now we can modify the name
console.log(ironman.talk());

const thor = SuperHeroes("Thor");
console.log(thor.talk());

// DOM exmaple
const createElement = (type) => {
  const element = document.createElement(type);
  return {
    element,
  };
};

console.log(createElement('h1'))
