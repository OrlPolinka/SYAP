//ex1
function ex1(arr){
    return arr.reduce((value, item) => {
        return value.concat(Array.isArray(item) ? ex1(item) : item);
    }, []);
}

let arr1 = [1, [1, 2, [3, 4]], [2, 4]];
let arr2 = [5, [6, 8], 7, 9];

let result1 = ex1(arr1).concat(ex1(arr2));
alert(result1);


//ex2
function ex2(arr){
    let sum = 0;
    arr.forEach((item) => {
        if(Array.isArray(item)){
            sum += ex2(item);
        } 
        else {
            typeof item === "number";
            sum += item;
        }
    });
    return sum;
}

alert(ex2(arr1));


//ex3
function ex3(arr){
    let students2 = {};

    for(let key of arr){
        if(key.age > 17){
            if(!students2[key.groupID]){
                students2[key.groupID] = [];
            }
            students2[key.groupID].push(key);
        }
    }
    return students2;
}

let students = [
    {name: "Ira", age: 18, groupID: 8},
    {name: "Pavel", age: 19, groupID: 7},
    {name: "Veronica", age: 16, groupID: 8},
    {name: "Ivan", age: 19, groupID: 8},
    {name: "Lena", age: 17, groupID: 7}
];
alert(JSON.stringify(ex3(students), null, 2));


//ex4
function ex4(str) {
    let newStr = '';
    for (let letter of str) {
        newStr += letter.charCodeAt(0);
    }
    return newStr;
}

let total1 = ex4("ABC");
let total2 = total1.replace(/7/g, "1");
alert(total1 - total2);


//ex5
function extend(...objects){
    let result = {};
    Object.assign(result, ...objects);
    return result;
}
let example1 = extend( {a: 1, b: 2}, {c: 3} );
let example2 = extend( {a: 1, b: 2}, {c: 3}, {d: 4} );
let example3 = extend( {a: 1, b: 2}, {a: 3, c: 3}  );

alert(JSON.stringify(example1));
alert(JSON.stringify(example2));
alert(JSON.stringify(example3));


//ex6
function ex6(number){
    let result = [];
    for(let i = 0; i < number; i++){
        let space = ' '.repeat(number - i - 1);
        let star = '*'.repeat(2 * i + 1);
        result.push(space + star);
    }
    return result;
}
alert(JSON.stringify(ex6(3), null, 2));