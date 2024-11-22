class Task{
    constructor(id, name, condition){
        this.id = id;
        this.name = name;
        this.condition = condition;
    }

    enterName(newName){
        this.name = newName;
    }

    enterCondition(newCondition){
        this.condition = newCondition;
    }
}

class Todolist{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.tasks = [];
    }

    enterName(newName){
        this.name = newName;
    }

    newTask(task){
        this.tasks.push(task);
    }

    filtrCondition(newCondition){
        let cond = this.tasks.filter(task => task.condition == newCondition);
        return cond;
    }
}

let todolist1 = new Todolist(1, "список дел 1");
let todolist2 = new Todolist(2, "список дел 2");
let todolist3 = new Todolist(3, "список дел 3");

let task1 = new Task(17, "задача 1", "не выполнена");
let task2 = new Task(7, "задача 2", "выполнена");
let task3 = new Task(52, "задача 3", "не выполнена");
let task4 = new Task(177, "задача 4", "не выполнена");
let task5 = new Task(19, "задача 5", "выполнена");
let task6 = new Task(32, "задача 6", "выполнена");

task4.enterName("измененная задача 4");
task6.enterCondition("не выполнена");

todolist1.enterName("измененный список дел 1");
todolist1.newTask(task1);
todolist3.newTask(task6);
todolist1.newTask(task2);
todolist2.newTask(task3);
todolist1.newTask(task4);
todolist1.newTask(task5);

console.log(todolist1);
console.log(todolist2);
console.log(todolist3);

console.log(todolist1.filtrCondition("не выполнена"));
console.log(todolist1.filtrCondition("выполнена"));
