//Objectneri poqr xndirner

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log (user)


//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum+=salaries[key]
}

console.log(sum):



//multiplay numbers in object

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

console.log(multiplyNumeric(menu));

//Object sarqox functia, vor amen angam nuyn ban@ cgrvi

function personC (name, surname, age) {
  return {
    name: name;
    surname,
    age
  }
}

let obj1 = personC("Karen", "Bagdasaryan", 28);

//constructor function@ senc en grum praktikayum

function Person (name, surname, age) {
  // this = {}
  // function body ex
  this.name = name;
  this.surname = surname;
  this.age = age;
  //return this   
}

let person = new Person('Hovik','Mamikonyan', 28);

//stugelu hamar, targmanabar instance nshanakuma "orinak"
person instanceof Person;

//avtomeqenayi bazayi orinak, constructor function, grvuma ketsatarov

function MakeCar (color) {
  this.isCar = true;
  this.engine = 'working';
  this.color = color || 'white';
}

let c = new MakeCar('black');
let c1 = new MakeCar //defaultov klni 'white'
c1.maxSpeed = "120km/h" //ete uzum enq arandzin property avelacnenq


// objecti mej function grel@

let constrictors = {
  Car: function (color, maxSpeed) {
    this.color = color;
    this.maxSpeed = maxSpeed;
  },
  Dog(breed, gender) {
    this.breed = breed;
    this.gender  = gender;
  },
  color: 'initial color'
};
  //kanchelu dzver@
let car1 = new constrictors.Car('white', 200);
let car2 = new constrictors.Car('black', 180);
let dog1 = new constrictors.Dog('dog', 'male');
let dog2 = new constrictors.Dog('doberman', 'female');

