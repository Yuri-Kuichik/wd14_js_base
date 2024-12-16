// Пустой массив todoListData для хранения задач и состояний
const todoListData = [];

// Если при запросе к localStorage по получению todoListData, это значение отсутствует, то выполняем следующее
if (!localStorage.getItem("todoListData")) {
  // добавляем todoListData в localStorage
  localStorage.setItem('todoListData', JSON.stringify(todoListData))
}

// находим шаблон в html (template)
let todo_template = document.querySelector('#todo-item')
// находим контейнер в который будем добавлять шаблоны
let todo_container = document.querySelector('.todo-list')
// извлекаем todoListData из localStorage
let todoListDataLocal = localStorage.getItem('todoListData')
// находим кнопку открытия модального окна для добавления задачи
let addTaskButton = document.getElementById("addTaskButton");
// находим форму с модальным окном
let modal = document.getElementById("modal");
// находим кнопку добавления задачи
let addTask = document.getElementById("addTask");
// находим кнопку отката добавления задачи
let cancelTask = document.getElementById("cancelTask");
// находим инпут в модальном окне
let taskInput = document.getElementById("taskInput");

addTaskButton.addEventListener('click', () => {
  modal.style.removeProperty('display');
})

cancelTask.addEventListener('click', () => {
  modal.style.display = 'none';
})

let todoListParse = JSON.parse(localStorage.getItem("todoListData")) || [];

addTask.addEventListener('click', (e) => {
  if (taskInput.value) {
    todoListParse.push({text: taskInput.value, completed: false});
    localStorage.setItem('todoListData', JSON.stringify(todoListParse));
    const todoItem = todo_template.content.cloneNode(true)
    todoItem.querySelector('.todo-list__checkbox').checked = e.completed
    todoItem.querySelector('.todo-list__text').textContent = taskInput.value
    todo_container.appendChild(todoItem)
    modal.style.display = 'none';
    taskInput.value = '';
  } else alert('Нельзя добавить пустую задачу');
})

// Выполняем итерацию по массиву todoListDataLocal. По каждой итерации выполняем:
JSON.parse(todoListDataLocal).forEach((e) => {
  // Клонируем содержимое тега <template> в переменную
  const  todoItem = todo_template.content.cloneNode(true)
  // Находим чекбокс и ставим активен ли он в зависимости от статуса задачи (completed)
  todoItem.querySelector('.todo-list__checkbox').checked = e.completed
  // Находим нужный тег и помещаем текст внутрь
  todoItem.querySelector('.todo-list__text').textContent = e.text
  // Вставляем склонированный контент в контейнер
  todo_container.appendChild(todoItem)
})

// Находим кнопку изменения таски
let todo_edit_buttons = document.querySelectorAll('.todo-list__edit')
todo_edit_buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // После того, как поняли, что за кнопку мы нажали - получаем его родителя <div>
    let taskContainer = button.parentElement
    // Получаем в родительском элементе доступ к месту, где должен быть текст
    let taskText = taskContainer.querySelector('.todo-list__text')
    let updateTask = prompt('Введите текст новой задачи: ', taskText.textContent)
    let todoList = JSON.parse(localStorage.getItem('todoListData')) || [];
    let foundTask = todoList.find((e) =>
      e.text === taskText.textContent);
      if (updateTask && updateTask.trim()) {
        foundTask.text = updateTask;
        taskText.textContent = updateTask;
      } else {
        alert('Текст задачи не может быть пустым!');
      }



    localStorage.setItem('todoListData', JSON.stringify(todoList));
  })
})
