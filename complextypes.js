// Objects:-
function canVote(age) {
  if (age > 18) {
    return user.name + "can vote";
  } else {
    return user.name + "can't vote";
  }
}
function greet(user) {
  console.log(
    "Hi," +
      user.gender +
      user.name +
      " Your age is " +
      user.age +
      canVote(user.age)
  );
}

let user = {
  name: "Pavan ",
  age: "20 ",
  gender: "Mr ",
};

greet(user);

// Assignment of Array of Objects

const users = [
  {
    name: "pavan",
    age: 20,
  },
  {
    name: "ashish",
    age: 26,
  },
  {
    name: "chaman",
    age: 14,
  },
];

function Adult(users) {
  arr2 = [];
  for (i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      arr2.push(users[i]);
    }
  }
    return arr2;
}

console.log(Adult(users));

// filter in js . Here we fiter out our data according to the function using filter function.
function Adult2(users){
  const result = users.filter(users => users.name == "pavan")
  return result
}

const ans = Adult2(users)
console.log(ans);

