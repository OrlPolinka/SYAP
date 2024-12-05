let tasks = [];
let taskId = 0;

// Добавление новой задачи
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();    //trim удаляет лишние пробелы до и после
    if (taskName === '') {
        alert('Введите название задачи');
        return;
    }

    tasks.push({ id: taskId++, name: taskName, completed: false });
    taskInput.value = '';
    renderTasks();
}

// Отображение задач в списке
function renderTasks(filteredTasks = tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    filteredTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'toDo';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleTaskCompletion(task.id);

        const taskText = document.createElement('span');
        taskText.className = 'item-text';
        taskText.textContent = task.name;

        const editButton = document.createElement('button');
        editButton.className = 'buttonRedact';
        editButton.textContent = 'Редактировать';
        editButton.onclick = () => editTask(task.id);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'buttonDelete';
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = () => deleteTask(task.id);

        taskElement.appendChild(checkbox);
        taskElement.appendChild(taskText);
        taskElement.appendChild(editButton);
        taskElement.appendChild(deleteButton);

        taskList.appendChild(taskElement);
    });
}

// Удаление задачи
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

// Редактирование задачи
function editTask(id) {
    const newName = prompt('Введите новое название задачи:');
    if (newName) {
        const task = tasks.find(task => task.id === id);
        task.name = newName.trim();
        renderTasks();
    }
}

// Переключение состояния задачи (выполнена/не выполнена)
function toggleTaskCompletion(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    renderTasks();
}

// Фильтрация задач
function showTasks(filter) {
    switch (filter) {
        case 'all':
            renderTasks(tasks);
            break;
        case 'completed':
            renderTasks(tasks.filter(task => task.completed));
            break;
        case 'notCompleted':
            renderTasks(tasks.filter(task => !task.completed));
            break;
    }
}