//ex1
alert("Exercise 1\nVariant 1");
//var1
function makeCounter(){
    let currentCount = 1;

    return function(){  //(*)
        return currentCount++;
    };
}

let counter = makeCounter();

alert( counter() ); //1
alert( counter() ); //2
alert( counter() ); //3

let counter2 = makeCounter();
alert( counter2() );    //1

//var2
alert("Variant 2"); 
let current_Count = 1;
function make_Counter(){
    return function(){
        return current_Count++;
    };
}

let _counter = make_Counter();
let _counter2 = make_Counter();

alert( _counter() );    //1
alert( _counter() );    //2

alert( _counter2() );   //3
alert( _counter2() );   //4


//ex2
alert("Exercise 2");
function volume(l){
    return(h) => {
        return(w) => {
            return l * h * w;
        }
    }
}
alert("1) Объём прямоугольного параллелепипеда: " + volume(1)(2)(3));
function _volume(l){
    return(w, h) => {
        return l * h * w;
    }
}
const hV = _volume(1);
alert("2) Объём прямоугольного параллелепипеда: " + hV(2, 3) + 
"\n3) Объём прямоугольного параллелепипеда: " + hV(4, 5));

//ex3
alert("Exercise 3");
function* generatePath(){
    let x = 0;
    let y = 0;
    while(true){
        let direction = yield {x, y};
        switch(direction){
            case "left":
                x-=10;
                break;
            case "right":
                x+=10;
                break;
            case "up":
                y+=10;
                break;
            case "down":
                y-=10;
                break;
            default:
                break;
        }
        alert(`x:${x}, y:${y}`);
    }
    
}

const result = generatePath();
result.next();

for(let i = 0; i < 4; i++){
    let direction = prompt("Введите направление(left, right, up, down): ");
    result.next(direction);
}


//ex4
alert("Exercise 4");
var a = "Глобальная переменная";
alert(window.a);

function gFunction(){
    alert("Глобальная функция")
}
window.gFunction();

window.a = "Переопределенная переменная";
alert(a);

window.gFunction = function(){
    alert("Переопределенная функция");
}
gFunction();