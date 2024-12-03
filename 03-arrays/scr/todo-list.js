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

// находим шаблон в html (template)
let todo_template = document.querySelector('#todo-item')
// находим контейнер в который будем добавлять шаблоны
let todo_container = document.querySelector('.todo-list')
// Выполняем итерацию по массиву todoListData. По каждой итерации выполняем:
todoListData.forEach((e) => {
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