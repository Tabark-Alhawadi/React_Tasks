/////////////////////////// Classes Tasks
///task one///

class Car{
    constructor(model,make,year,min,max){
    this.make = make,
    this.model = model,
    this.year = year,
    this.cost = this.carCost(min,max),
    this.age = this.ageCar(year)
}

ageCar(year){
    return 2023-year;
}
carCost(min,max){
    return min +(max-min)*Math.random();
}
getDescription(){
    return `A ${this.model} made by ${this.make} at ${this.year} its age ${this.age} and its cost ${this.cost}`;

}
}

const car1 = new Car ("Tesla Model X","Tesla","2015",40000,100000);
console.log(car1.getDescription());



///task two///
class Person{
    constructor(firstName,lastName,age){
      this.firstName = firstName,
      this.lastName = lastName,
      this.age = age
    }
    getGreeting(){
        return `Hi i am ${this.firstName} ${this.lastName} and i am ${this.age} years old`;
    }
}

const person1 = new Person ("Tabark","Alhawadi","19");
console.log(person1.getGreeting());


/////////////////////////////Arrow Function Tasks
///task one///
function counterFunc(counter) {
    if (counter > 100) {
      counter = 0;
    }else {
      counter++;
    }
    
    return counter;
  }
    
  counterFunc2 = counter => { return counter > 100 ? counter = 0 : counter++ }
  
  console.log(counterFunc(150))
  console.log(counterFunc2(150))

///task two///
  function nameAge(name, age) {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
  }  

  nameAge2 = (name, age) => {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
  }

  nameAge('tabark',19)
  nameAge2('reham',20)


///task three///
function createFullName(firstName, lastName) {
    return firstName + " " + lastName;
}

createFullName2 = (firstName, lastName) => {  return firstName + " " + lastName;}

console.log(createFullName('tabark','odah'))
console.log(createFullName2('reham','ibrahem'))

///task four///
function doubleNumber(number) {
    return number * 2;
}

doubleNumber2 = number => {return number * 2}


console.log(doubleNumber(500))
console.log(doubleNumber2(600))
  

///task 5///
function getEvenNumbers(array) {
    let evenNumbers = [];
    for (let i of array) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  }

  getEvenNumbers2 = array => {
    let evenNumbers = [];
    for (let i of array) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  }


  let array= [200,25,400];
  getEvenNumbers5 = array.filter(ele => ele%2==0)
  
  console.log(getEvenNumbers([300,35,500]))
  console.log(getEvenNumbers2([300,40,500]))
  console.log(getEvenNumbers5)

    





//////////////////////Array Method tasks
///task one///

let nums = [2, 4, 5];

const numTotal =nums.reduce((acc,curr)=> acc+curr**2,0)


console.log(numTotal)

///task two///

multiply = (list) => {
    const array =list.map(e => e *10) 
    return array;
}

console.log(multiply([1,2,3,4,5,6,7,8]));

///task three///

makeStrings=[
    {  name: "Angelina Jolie",
    age: 80   },
    {   name: "Eric Jones",
       age: 2
    },
    {   name: "Paris Hilton",
    age: 5
},
{   name: "Kayne West",
age: 16
},
{   name: "Bob Ziroll",
age: 100
}
];

Matrix = (array)=>{
    const MatrixList=array.map(ele => ele.age>10 ? `${ele.name} can go to The Matrix`:`${ele.name} is under age!!`  )
    
    return MatrixList;
}


console.log(Matrix(makeStrings));

///task four///

var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

avgAge = (list) =>{
    const array = list.reduce((acc,curr)=> (acc+curr.age),0)/list.length;
    
    return array;
    
}
console.log(avgAge(persons));


///task 5///

evenOnly= (list)=>{
    const array=list.filter(ele => ele%2 == 0 )
    return array;
}
console.log(evenOnly([1,8,6,4,5,10]));

///task 6///

multiFour = (list)=>{
    const array=list.filter(ele => ele%4 == 0 )
    return array;
}
console.log(multiFour([1,8,6,4]));