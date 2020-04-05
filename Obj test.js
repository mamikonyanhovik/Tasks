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