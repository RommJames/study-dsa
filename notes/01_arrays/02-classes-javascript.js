// reference type
console.log([] === []);

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 === object2);
console.log(object1 === object3);
object1.value = 15;
console.log(object2);
console.log(object3);

// context vs scope
const object4 = {
  a: function () {
    console.log(this);
  },
};

// instantiation
class Player {
  constructor(name, type) {
    console.log("Player: ", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("Wizard: ", this);
  }
  play() {
    console.log(`WEEEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");

wizard1.introduce();
wizard1.play();
