const todoListData = [
    {
        text: 'Do homework!',
        completed: true,
    },
    {
        text: 'Do exercise!',
        completed: true,
    },
    {
        text: 'Read JS book!',
        completed: false,
    }
]

let itemTemplate = document.querySelector("#todo-item");

let container = document.querySelector(".todo-list");


let tasks = null;
let modalWindow = document.querySelector(".modal");
let modalWindowEdit = document.querySelector(".modalEdit");
let addButton = document.querySelector(".addButton");
let addTaskButton = document.querySelector(".addTaskButton");
let cancelButton = document.querySelector(".cancelButton");
let editButtonModal = document.querySelector(".editButtonModal")
let taskInput = document.querySelector("#text");

//default things on start
hideModalWindows();
showCurrentListOfTodo();

function showCurrentListOfTodo() {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    updateView();
}

function findFuckingElement(text) {
    return tasks.find(obj => obj.text === text)
}

function hideModalWindows() {
    modalWindow.style.display = "none";
    modalWindowEdit.style.display = "none";
    addButton.addEventListener('click', () => { showModalWindow() });
    addTaskButton.removeEventListener('click', () => { });
    cancelButton.removeEventListener('click', () => { });
}


function showModalWindow() {
    let text = null;
    modalWindow.style.display = "block";
    addButton.removeEventListener('click', () => { });
    cancelButton.addEventListener('click', () => { hideModalWindows() });
    taskInput.addEventListener('input', (evt) => {
        if (evt.target.value == "")
            evt.target.classList.add("border-colro-red");
        else {
            text = evt.target.value;
            evt.target.classList.remove("border-colro-red");
        }
    });
    addTaskButton.addEventListener('click', () => { addTask(text) });
}

function showModalWindowEdit(text) {
    let textEditTo = null;
    let input = modalWindowEdit.querySelector("#text");
    modalWindowEdit.style.display = "block";
    input.addEventListener('input', (evt) => {
        if (evt.target.value == "")
            evt.target.classList.add("border-colro-red");
        else {
            evt.target.classList.remove("border-colro-red");
            textEditTo = evt.target.value;
        }
    });
    modalWindowEdit.querySelector(".editButtonModal").addEventListener('click', () => {
        input.removeEventListener('click', () => { });
        editTaskName(text, textEditTo);
    })
}

function addTask(text) {
    if (text != "") {
        taskInput.classList.remove("border-colro-red");
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push({
            "text": text,
            "completed": false,
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    else
        taskInput.classList.add("border-colro-red");
    updateView();
    hideModalWindows();
}

function editTaskName(text, textToChange) {
    task = findFuckingElement(text);
    task.text = textToChange;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateView();
}

function editTaskStatus(text, status) {
    task = findFuckingElement(text);
    task.completed = status;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateView();
}

function deleteItem(text) {
    task = findFuckingElement(text);
    index = tasks.indexOf(task);
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    updateView();
}


function updateView() {
    todos = document.querySelectorAll('.todo-item');
    todos.forEach((element) => element.remove());
    tasks.forEach((element) => {
        let todoItem = itemTemplate.content.cloneNode(true);
        todoItem.querySelector(".todo-list__checkbox").checked = element.completed;
        todoItem.querySelector(".todo-list__checkbox").addEventListener('change', (evt) => {
            editTaskStatus(element.text, evt.target.checked);
        })
        todoItem.querySelector(".todo-list__text").textContent = element.text;
        todoItem.querySelector(".editButton").addEventListener('click', () => {
            showModalWindowEdit(element.text);
        });
        todoItem.querySelector(".removeButton").addEventListener('click', () => { deleteItem(element.text) });
        container.appendChild(todoItem);
    });
}