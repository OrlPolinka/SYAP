//задание 1
let a1 = 5;//number
let name = "Name";//string
let i1 = 0;//number
let double = 0.23;//number
let result = 1/0;//infinity
let answer = true;//boolean
let no = null;//null

//задание 2
let B = 5;//длина строны В
let A1 = 45;//длина одной стороны А
let A2 = 21;//длина второй стороны А
let sB = B * B;//площадь В = 25
let sA = A1 * A2;//площадь А = 945
let square = sA / sB;//количество квадратов = 37.8 = 37
square = square | 0;//округление вниз
alert("Количество квадратов: " + square);

//задание 3
let i = 2;
let a = ++i;
let b = i++;
alert(a == b);//true

//задание 4
"Котик" < "котик" ? alert(true) : alert(false);
"Котик" < "китик" ? alert(true) : alert(false);
"Кот" < "Котик" ? alert(true) : alert(false);
"Привет" < "Пока" ? alert(true) : alert(false);
73 < "53" ? alert(true) : alert(false);
false == 0 ? alert(true) : alert(false);
54 == true ? alert(true) : alert(false);
123 != false ? alert(true) : alert(false);
true == "3" ? alert(true) : alert(false);
3 !== "5мм" ? alert(true) : alert(false);
8 < "-2" ? alert(true) : alert(false);
34 == "34" ? alert(true) : alert(false);
null == undefined ? alert(true) : alert(false);

//задание 5
let Name = "Александра";
let NAME = "АЛЕКСАНДРА";
let namePatronymic = "Александра Валентиновна";
let NAMEPatrinymic = "АЛЕКСАНДРА ВАЛЕНТИНОВНА";
let fullName = "Кизино Александра Валентиновна";
let FULLName = "КИЗИНО АЛЕКСАНДРА ВАЛЕНТИНОВНА";

let question = prompt('Как зовут преподователя?', "");
if(question == Name || question == namePatronymic || question == fullName || question == NAME || question == NAMEPatrinymic || question == FULLName){
    alert("Вы правы! Преподователя зовут " + question);
}
else alert("Вы не правы!");

//задание 6
let Russian = confirm("Сдан русский?");
let Math = confirm("Сдана математика?");
let English = confirm("Сдан английский?");
if(Russian == true && Math == true && English == true){
    alert("Перевод на следующий курс");
}
else if(Russian == false && Math == false && English == false){
    alert("Отчисление");
}
else if(Russian == false || Math == false || English == false){
    alert("Пересдача");
}

//задание 7
alert(true + true);//2
alert(0 + "5");//05
alert(5 + "мм");//5мм
alert(8/Infinity);//0
alert(9 * "\n9");//81
alert(null - 1);//-1
alert("5" - 2);//3
alert("5px" - 3);//NaN
alert(true - 3);//-2
alert(7 || 0);//7

//задание 8
for(let i = 1; i < 11; i++){
    if(i % 2 == 0){
        alert(i + 2);
    }
    if(i % 2 != 0){
        alert(i + "мм");
    }
}

//задание 9
//с помощью массива
let arr = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
let day1 = prompt("Введите номер дня недели: ", "");
alert(arr[day1 - 1]);
//с помощью объекта
let day = {
    1: "пн",
    2: "вт",
    3: "ср",
    4: "чт",
    5: "пт",
    6: "сб",
    7: "вс"
};
let day2 = prompt("Введите номер дня недели: ", "");
alert(day[day2]);

//задание 10
function ex10(par1, par2 = "два", par3){
    par3 = prompt("Введите третий параметр", "");
    return (par1 + par2 + par3);
}
let res = ex10();
alert(res);

//задание 11
function params1(a, b){
    if(a == b) return a * 4;
    else return a * b;
}
let params2 = function(a, b){
    if(a == b) return a * 4;
    else return a * b;
};
let params3 = (a, b) => {
    if(a == b) return a * 4; 
    else return a * b;
};
let a11 = prompt("Введите сторону а: ");
let b11 = prompt("Введите сторону b: ");
let result1 = params1(a11, b11);
alert(result1);
let result2 = params2(a11, b11);
alert(result2);
let result3 = params3(a11, b11);
alert(result3);