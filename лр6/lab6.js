//ex1
let numbers = [1, 2, 3, 4, 5];
let [first] = numbers;
console.log(first);

//ex2
let user = {
    name : "Polina",
    age : 18
};
let admin = {admin: "Orlovskaya", ...user};
console.log(`${admin.admin}, ${admin.name}, ${admin.age}`);

//ex3
let store = {
    state: {    //1 уровень
        profilePage: {  //2 уровень
            posts: [    //3 уровень
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1}
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valera'}, 
                {id: 2, name: 'Andrey'}, 
                {id: 3, name: 'Sasha'}, 
                {id: 4, name: 'Victor'} 
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'}
            ],
        },
        sidebar: [],
    },
}

let {state: {profilePage: {posts}, dialogsPage: {dialogs, messages}}} = store;

console.log("likesCount: ");
posts.forEach(elements => {
    console.log(elements.likesCount);
});

console.log(dialogs.filter(item => item.id % 2 == 0));

let m = messages.map(function(elements){
    return elements = {id: elements.id, message: "Hello user"};
});
console.log(m);

//ex4
let tasks = [
    {id: 1, title: "HTML&CSS", isDone: true},
    {id: 2, title: "JS", isDone: true},
    {id: 3, title: "ReactJS", isDone: false},
    {id: 4, title: "Rest API", isDone: false},
    {id: 5, title: "GraphQL", isDone: false},
];
let task = {id: 6, title: "New task", isDone: true};
console.log(...tasks, task);

//ex5
let arr = [1, 2, 3];
function sumValues(x, y, z){
    return x + y + z;
}
console.log(sumValues(...arr));