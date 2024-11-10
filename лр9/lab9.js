//ex1   не совсем правильно! надо переделать!
let square = {
    size: 10,
    color: "yellow"
};

let smallSquare = Object.create(square, {
    size: {value: 5}
});

let circle = {
    size: 10,
    color: "white"
};

let greenCircle = Object.create(circle, {
    color: {value: "green"}
});

let triangle = {
    size: 10,
    color: "white",
    lines: 1
};

let triangle2 = Object.create(triangle, {
    lines: {value: 3}
});

console.log(JSON.stringify(square, null, 2));
console.log(smallSquare.size, smallSquare.color);

console.log(JSON.stringify(circle, null, 2));
console.log(greenCircle.color, greenCircle.size);

console.log(JSON.stringify(triangle, null, 2));
console.log(triangle2.size, triangle2.color, triangle2.lines);


//ex2
class Human {
    constructor(name, surname, age, address) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.address = address;
    }
    newAge(newAge) {
        this.age = newAge;
    }
    newAddress(newAddress) {
        this.address = newAddress;
    }
}

let human = new Human("Polina", "Orlovskaya", 18, "Minsk");
console.log(JSON.stringify(human, null, 2));
human.newAge(19);
human.newAddress("Disna");
console.log(JSON.stringify(human, null, 2));

class Human2 {
    constructor(name, surname, address, birthYear) {
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.birthYear = birthYear;
    }
    set age(value) {
        this._age = value; 
        this._birthday = 2024 - value;
    }
    get age() {
        return this._age;
    }
}

let human2 = new Human2("Polina", "Orlovskaya", "Minsk", 2005);
console.log(JSON.stringify(human, null, 2));

class Student extends Human {
    constructor(name, surname, age, address, faculty, course, group, number){
        super(name, surname, age, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.number = number;
    }
    newCourseAndGroup(newCourse, newGroup) {
        this.course = newCourse;
        this.group = newGroup;
    }
    getFullName() {
        console.log(`Имя и Фамилия: ${this.name}, ${this.surname}`);
    }
}

let student = new Student("Polina", "Orlovskaya", 18, "Minsk", "FIT", 2, 9, 71231273);
console.log(`Имя: ${student.name}, фамилия: ${student.surname}, возраст: ${student.age}, адрес: ${student.address},
     факультет: ${student.faculty}, курс: ${student.course}, группа: ${student.group}, номер зачетки: ${student.number}`);
student.newCourseAndGroup(3, 8);
console.log(`Новый курс: ${student.course}, новая группа: ${student.group}`);
student.getFullName();

class Faculty {
    constructor(facultyName, groupCount, studentCount) {
        this.facultyName = facultyName; 
        this.groupCount = groupCount; 
        this.studentCount = studentCount; 
        this.students = []; 
    }
    addStudent(student) {
        this.students.push(student); 
    }
    newGroupCount(newGroupCount) {
        this.groupCount = newGroupCount;
    }
    newStudentCount(newStudentCount) {
        this.studentCount = newStudentCount;
    }
    getDev() {
        const devStudents = this.students.filter(student => String(student.number)[1] === '3');
        return devStudents.length;
    }
    getGroupe(groupNumber) {
        let groupStudents = this.students.filter(record => record.group == groupNumber); 
        return groupStudents;
    }
}

let faculty = new Faculty("FIT", 10, 90);

let student2 = new Student("name2", "surname2", 18, "Minsk", "FIT", 2, 4, 73231273); 
let student3 = new Student("name3", "surname3", 18, "Minsk", "FIT", 2, 9, 73231273); 
let student4 = new Student("name4", "surname4", 18, "Minsk", "FIT", 2, 7, 72231273); 
let student5 = new Student("name5", "surname5", 18, "Minsk", "FIT", 2, 9, 73231273); 

faculty.addStudent(student);
faculty.addStudent(student2);
faculty.addStudent(student3);
faculty.addStudent(student4);
faculty.addStudent(student5);

console.log("Количество студентов специальности ДЭВИ:", faculty.getDev()); 

console.log("Список студентов группы 9:", faculty.getGroupe(9)); 