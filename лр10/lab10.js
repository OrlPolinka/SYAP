//ex1
const set = new Set([1, 1, 2, 3, 4]);
console.log(set);   //1, 2, 3, 4

//ex3
const name = "Lydia";
age = 21;
console.log(delete name);   //false
console.log(delete age);    //true

//ex4
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;
console.log(y);     //1

//ex5
const user = {name: "Lydia", age: 21};
const admin = {admin: true, ...user};
console.log(admin);     //true  Lydia  21

//ex6
const person = {name: "Lydia"};
Object.defineProperty(person, "age", {value: 21});
console.log(person);    //Lydia  21
console.log(Object.keys(person));   //name

//ex7
const a = {};
const b = {key: "b"};
const c = {key: "c"};
a[b] = 123;
a[c] = 456;
console.log(a[b]);  //456

//ex8
let num = 10;
const increaseNumber = () => num++;
const increasePassedNumber = number => number++;
const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);
console.log(num1);  //10
console.log(num2);  //10

//ex9
const value = {number: 10};
const multiply = (x = {...value}) => {
    console.log((x.number *= 2));
};
multiply();     //20
multiply();     //20
multiply(value);    //20
multiply(value);    //40

//ex10
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));   //1 2