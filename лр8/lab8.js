let  user = {
    name: 'Masha',
    age: 21
};

let numbers = [1, 2, 3];

let user1 = {
    name: 'Masha',
    age: 23,
    location: {
        city: 'Minsk',
        country: 'Belarus'
    }
};

let user2 = {
    name: 'Masha',
    age: 28,
    skills: ["HTML", "CSS", "JavaScript", "React"]
};

const array = [
    {id: 1, name: 'Vasya', group: 10}, 
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]

let user4 = {
    name: 'Masha',
    age: 19,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams: {
            maths: true,
            programming: false
        }
    }
};

let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { maths: true, mark: 8},
            { programming: true, mark: 4},
        ]
    }
};

let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Ivanov ',
		    degree: 'PhD'
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Petrov',
		    degree: 'PhD'
		}
	     },
        ]
    }
};

let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10,
        },
        exams: [
            { 
		maths: true,
		mark: 8,
		professor: {
		    name: 'Ivan Petrov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
            { 
		programming: true,
		mark: 10,
		professor: {
		    name: 'Petr Ivanov',
		    degree: 'PhD',
		    articles: [
                        {title: "About HTML", pagesNumber: 3},
                        {title: "About CSS", pagesNumber: 5},
                        {title: "About JavaScript", pagesNumber: 1},
                    ]
		}
	     },
        ]
    }
};

let store = {
    state: {    //1 уровень 
        profilePage: {  //2 уровень
            posts: [    //3 уровень
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Valera'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Viktor'},
            ],
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hi hi'},
                {id: 3, message: 'hi hi hi'},
            ],
        },
        sidebar: [],
    },
}


//ex1
console.log("exercise 2");

let userClone = { ...user };

let numbersClone = [...numbers];

let user1Clone = { 
    ...user1, 
    location: { ...user1.location } 
};

let user2Clone = { 
    ...user2, 
    skills: [...user2.skills] 
};

let arrayClone = array.map(item => ({ ...item }));

let user4Clone = { 
    ...user4, 
    studies: { ...user4.studies, exams: { ...user4.studies.exams } }
};

let user5Clone = { 
    ...user5, 
    studies: { 
        ...user5.studies, 
        department: { ...user5.studies.department }, 
        exams: user5.studies.exams.map(exam => ({ ...exam }))
    } 
};

let user6Clone = { 
    ...user6, 
    studies: { 
        ...user6.studies, 
        department: { ...user6.studies.department }, 
        exams: user6.studies.exams.map(exam => ({ 
            ...exam, 
            professor: { ...exam.professor } 
        })) 
    } 
};

let user7Clone = { 
    ...user7, 
    studies: { 
        ...user7.studies, 
        department: { ...user7.studies.department }, 
        exams: user7.studies.exams.map(exam => ({ 
            ...exam, 
            professor: { 
                ...exam.professor, 
                articles: exam.professor.articles.map(article => ({ ...article }))
            }
        })) 
    } 
};

let storeClone = { 
    ...store, 
    state: { 
        ...store.state, 
        profilePage: { 
            ...store.state.profilePage, 
            posts: store.state.profilePage.posts.map(post => ({ ...post })) 
        },
        dialogsPage: { 
            ...store.state.dialogsPage, 
            dialogs: store.state.dialogsPage.dialogs.map(dialog => ({ ...dialog })),
            messages: store.state.dialogsPage.messages.map(message => ({ ...message, message: 'Hello' }))
        }
    } 
};

console.log(JSON.stringify(userClone, null, 2)); 
console.log(JSON.stringify(numbersClone, null, 2)); 
console.log(JSON.stringify(user1Clone, null, 2)); 
console.log(JSON.stringify(user2Clone, null, 2)); 
console.log(JSON.stringify(arrayClone, null, 2)); 
console.log(JSON.stringify(user4Clone, null, 2)); 
console.log(JSON.stringify(user5Clone, null, 2)); 
console.log(JSON.stringify(user6Clone, null, 2)); 
console.log(JSON.stringify(user7Clone, null, 2)); 
console.log(JSON.stringify(storeClone, null, 2)); 


//ex2
console.log("exercise 2");
user5Clone.studies.department.group = 12;
user5Clone.studies.exams[1].mark = 10;
console.log (JSON.stringify(user5Clone, null, 2));


//ex3
console.log("exercise 3");
user6Clone.studies.exams[1].professor.name = 'Kizino Aleksandra';
console.log (JSON.stringify(user6Clone, null, 2));


//ex4
console.log("exercise 4");
user7Clone.studies.exams[1].professor.articles[1].pagesNumber = 3;
console.log (JSON.stringify(user7Clone, null, 2));


//ex5
console.log("exercise 5");
console.log (JSON.stringify(storeClone, null, 2));
