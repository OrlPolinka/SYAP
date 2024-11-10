//ex1
let person = {
    name: "Polina",
    years: 18,

    greet() {
        console.log(`Привет, ${this.name}.`);
    },

    ageAfterYears() {
        console.log(`Текущий возраст: ${this.years}`);
    }
};
person.greet();
person.ageAfterYears();

//ex2
let car = {
    model: "модель 1",
    year: 1999,

    getInfo() {
        console.log(`модель: ${this.model}, год: ${this.year}.`);
    }
};
car.getInfo();

//ex3
function Book(title, author) {
    this.title = title;
    this.author = author;

    this.getTitle = function() {
        console.log(`Название книги: ${this.title}`);
    };

    this.getAuthor = function() {
        console.log(`Автор: ${this.author}`);
    };
}
let book1 = new Book("Дракула", "Брэм Скотт");
book1.getTitle();
book1.getAuthor();

//ex4
team = {
    array: [
        {name: "Джон", age: 25},
        {name: "Игорь", age: 22},
        {name: "Катя", age: 23},
        {name: "Юля", age: 19},
        {name: "Рома", age: 24}
    ],

    onDisplay(){
        this.array.forEach(element => {
            console.log(`Имя: ${element.name}, возраст: ${element.age}`);
        });
    }
}
team.onDisplay();

//ex5
const counter = (function() {
    let count = 0;
    return{
        increment(){
            return ++count;
        },
        decrement(){
            return --count;
        },
        getCount(){
            return count;
        }
    }
})();
    
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

//ex6
let item = {
    price: 52
}
Object.defineProperty(item, 'price', {
    writable: true,
    enumerable: true,
    configurable: true
});
let descriptor1 = Object.getOwnPropertyDescriptor(item, 'price');
console.log(descriptor1);
Object.defineProperty(item, 'price', {
    writable: false,
    enumerable: false,
    configurable: false
});
let descriptor2 = Object.getOwnPropertyDescriptor(item, 'price');
console.log(descriptor2);

//ex7
let circle = {
    radius: 2,
    get square(){
        return `Площадь: ${this.radius*this.radius*Math.PI}`;
    },
    set newRadius(value){
        this.radius = value;
    },
    get writeNewRadius(){
        return `Новый радиус: ${this.radius}`;
    }
};
console.log(circle.square);
circle.newRadius = 5;
console.log(circle.writeNewRadius);
console.log(circle.square);

//ex8
let car2 = {
    make: "make",
    model: "model",
    year: 2000
}
Object.defineProperties(car2, {
    make: {
        value: "make 1",
        writable: true,
        enumerable: true,
        configurable: true
    },
    model: {
        value: "model 1",
        writable: true,
        enumerable: true,
        configurable: true
    },
    year: {
        value: 1999,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(Object.getOwnPropertyDescriptor(car2, 'make'));
console.log(Object.getOwnPropertyDescriptor(car2, 'model'));
console.log(Object.getOwnPropertyDescriptor(car2, 'year'));


Object.defineProperties(car2, {
    make: {
        writable: false,
        enumerable: false,
        configurable: false
    },
    model: {
        writable: false,
        enumerable: false,
        configurable: false
    },
    year: {
        writable: false,
        enumerable: false,
        configurable: false
    }
});
console.log(Object.getOwnPropertyDescriptor(car2, 'make'));
console.log(Object.getOwnPropertyDescriptor(car2, 'model'));
console.log(Object.getOwnPropertyDescriptor(car2, 'year'));

//ex9
let massive = [2, 3, 4]

Object.defineProperty(massive, "sum", {
    get() {
        return this.reduce((acc, num) => acc + num, 0);
    },
    enumerable: true,  
    configurable: false
});

console.log(massive.sum)

//ex10
let rectangle = {
    width: 2,
    height: 3,

    get square(){
        return this.height*this.width;
    },
    set w(value){
        this.width = value;
    },
    get writeW(){
        return this.width;
    },
    set h(value){
        this.height = value;
    },
    get writeH(){
        return this.height;
    }
}
console.log(`Площадь: ${rectangle.square}`);
rectangle.w = 4;
rectangle.h = 5;
console.log(`Измененная ширина: ${rectangle.writeW}`);
console.log(`Измененная высота: ${rectangle.writeH}`);
console.log(`Новая площадь: ${rectangle.square}`);

//ex11
let user = {
    firstName: "Polina",
    lastName: "Orlovskaya",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
  }    
};
console.log(user.fullName);
user.fullName = "Veronica Shkinder";
console.log(user.fullName);