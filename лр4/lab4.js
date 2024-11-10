//ex1
alert("Exercise 1");

function toSet(){
    set.add(product1);
    set.add(product2);
    set.add(product3);
    set.add(product4);

    for(let value of set) alert(value.nameOfProduct);
}

function hasSet(){
    alert(set.has(product1));
    alert(set.has(product5));
}

function deleteInSet(){
    set.delete(product2);
    set.delete(product3);

    for(let value of set) alert(value.nameOfProduct);
}

let set = new Set();
let product1 = {nameOfProduct: "тетрадь"};
let product2 = {nameOfProduct: "ручка"};
let product3 = {nameOfProduct: "шкаф"};
let product4 = {nameOfProduct: "мороженое"};
let product5 = {nameOfProduct: "рюкзак"};

toSet();
alert("Размер set после добавления: " + set.size);
hasSet();
deleteInSet();
alert("Размер set после удаления: " + set.size);


//ex2
alert("Exercise 2");

function Display(){
    let list = "Список студентов:\n"
    for(let value of setOfStudent){
        list += (`Номер: ${value.number}, Группа: ${value.group}, ФИО: ${value.name}\n`);
    } 
    alert(list);
}

function studentToSet(){
    setOfStudent.add(student1);
    setOfStudent.add(student2);
    setOfStudent.add(student3);
    setOfStudent.add(student4);
    setOfStudent.add(student5);
}

function deleteStudent(number){
    for(let value of setOfStudent){
        if(value.number === number){
            setOfStudent.delete(value);
        }   
    }
}

function filter(group){
    let filteredSet = new Set();

    for(let value of setOfStudent){
        if(value.group === group){
            filteredSet.add(value);
        }
    }

    return filteredSet;
}

function sort(){
    let sortedStudent = Array.from(setOfStudent);
    sortedStudent.sort((a, b) => a.number - b.number);
    return sortedStudent;
}

let setOfStudent = new Set();
let student1 = {number: 123, group: 9, name: "FIO 1"};
let student2 = {number: 987, group: 6, name: "FIO 2"};
let student3 = {number: 564, group: 1, name: "FIO 3"};
let student4 = {number: 357, group: 6, name: "FIO 4"};
let student5 = {number: 154, group: 4, name: "FIO 5"};

studentToSet();
Display();

deleteStudent(564);
alert("Список студентов после удаления: ");
Display();

let filtered = filter(6);
alert("Список студентов 6 группы: ");
for(let value of filtered){
    alert(`Номер: ${value.number}, Группа: ${value.group}, ФИО: ${value.name}`);
} 

let sorted = sort();
alert("Список студентов, отсортированных по номеру: ");
for(let value of sorted){
    alert(`Номер: ${value.number}, Группа: ${value.group}, ФИО: ${value.name}`);
} 


//ex3
alert("Exercise 3");

let map = new Map();

function toMap(id, name, quantity, price){
    if(map.has(id)){
        alert("Такой товар уже существует");
        return;
    }
    map.set(id, {name, quantity, price});
}

function deleteId(id){
    if(map.delete(id)){
        alert("Продукт удален");
    }
    else{
        alert("Продукт не удален");
    }
}

function deleteName(name){
    let flag = false;
    for(let [key, value] of map){
        if(value.name === name){
            map.delete(key);
            flag = true;
        }
    }
    if(flag){
        alert("Продукт удален");
    }
    else{
        alert("Продукт не удален");
    }
}

function updateQuantity(id, newQuantity){
    let product = map.get(id);
    if(product) product.quantity = newQuantity;
}

function updatePrice(id, newPrice){
    let product = map.get(id);
    if(product) product.price = newPrice;
}

toMap(1, "шоколадка", 3, 2);
toMap(2, "стул", 2, 7);
toMap(3, "сумка", 1, 35);
toMap(4, "телефон", 1, 1500);
toMap(5, "кофе", 7, 1);

function onDisplay(){
    let productList = "Список продуктов:\n"
    for(let [id, value] of map){
        productList += `ID: ${id}, Название: ${value.name}, Количество: ${value.quantity}, Цена: ${value.price}\n`;
    }
    alert(productList);
}

onDisplay();

alert("Количество позиций в списке: " + map.size);

let sum = 0;
for (let value of map.values()) {
    sum += value.quantity * value.price;
}
alert("Сумма стоимости всех товаров: " + sum);

deleteId(2);
onDisplay();

deleteName("телефон");
onDisplay();

updateQuantity(1, 10);
updatePrice(5, 52);
onDisplay();


//ex4
alert("Exercise 4");

let cache = new WeakMap();

function process(obj){
    if(cache.has(obj)){
        return cache.get(obj);
    }
    let result = obj.key * 2;
    cache.set(obj, result);
    return result;
}

let example1 = {key: 5};
let example2 = {key: 10};

alert(process(example1));   //создаем
alert(process(example1));   //из кэша
alert(process(example2));   //создаем
alert(process(example2));   //из кэша