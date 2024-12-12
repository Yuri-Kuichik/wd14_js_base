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
// добавляем todoListData в LS
localStorage.setItem('todoListData', JSON.stringify(todoListData))

// находим шаблон в html (template)
let todo_template = document.querySelector('#todo-item')
// находим контейнер в который будем добавлять шаблоны
let todo_container = document.querySelector('.todo-list')
// извлекаем todoListData из LS
const todoListDataLocal = localStorage.getItem('todoListData')
// Выполняем итерацию по массиву todoListData. По каждой итерации выполняем:
JSON.parse(todoListDataLocal).forEach((e) => {
  // Клонируем содержимое тега <template> в переменную
  // const todoItem =
  const  todoItem = todo_template.content.cloneNode(true)
  // Находим чекбокс и ставим активен ли он в зависимости от статуса задачи (completed)
  // todoItem.querySelector()
  todoItem.querySelector('.todo-list__checkbox').checked = e.completed
  // Находим нужный тег и помещаем текст внутрь
  // todoItem.querySelector()
  todoItem.querySelector('.todo-list__text').textContent = e.text
  // Вставляем склонированный контент в контейнер
  todo_container.appendChild(todoItem)
})

let todo_edit_buttons = document.querySelectorAll('.todo-list__edit')
todo_edit_buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let taskContainer = button.parentElement
    let taskText = taskContainer.querySelector('.todo-list__text');
    taskText.textContent = prompt('Введите текст новой задачи: ', taskText.textContent)
  })
})