//ex1
function basicOperation(operation, value1, value2) {
    let result;
    switch(operation){
        case '+':{
            result = value1 + value2;
            break;
        }
        case '-':{
            result = value1 - value2;
            break;
        }
        case '*':{
            result = value1 * value2;
            break;
        }
        case '/':{
            result = value1 / value2;
            break;
        }
        default:{
            break;
        }
    }
    return result;
}
let result = basicOperation('+', 5, 10); // result = 15
alert(result);

//ex2
let n = prompt("Введите число n: ", "");
while(n < 1){
    n = prompt("Неправильный ввод. Введите значение > 0: ", "")
}
function ex2(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += Math.pow(i, 3);
    }
    return sum;
}
let result2 = ex2(n);
alert(result2);

//ex3
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function ex3(arr){
    let sum = 0;
    let steps = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        steps++;
    }
    let result3 = sum / steps;
    return result3;
}
let result3 = ex3(arr);
alert(result3);

//ex4
let str = prompt("Введите строку: ", "");
function ex4(str){
    let str1 = str.replace(/[^a-zA-Z]/g, '');
    let str2 = str1.split('').reverse().join('');
    return str2;
}
let result4 = ex4(str);
alert(result4);

//ex5
let n1 = prompt("Введите число n: ", '');
while(n1 < 0) n1 = prompt("Неправильный ввод. Введите число >= 0: ", "");
let s1 = prompt("Введите строку: ", "");
function ex5(n1, s1){
    let s2 = '';
    if(n1 === 0) {
        return s2;
    }
    else{
        for(let i = 0; i < n1; i++){
            s2 += s1;
        }
        return s2;
    }
}
let result5 = ex5(n1, s1);
alert(result5);

//ex6
let arr1 = ["hello", "apple", "people", "student", "FIT"];
let arr2 = ["pig", "student", "pen", "BSTU", "people"];
function ex6(arr1, arr2){
    let arr3 = [];
    for(let i = 0; i < arr1.length; i++){
        let flag = false;
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]) {
                flag = true;
                break;
            }
        }    
        if(!flag) arr3.push(arr1[i]);
    }
    return arr3;
}
let arr3 = ex6(arr1, arr2);
alert(arr3);