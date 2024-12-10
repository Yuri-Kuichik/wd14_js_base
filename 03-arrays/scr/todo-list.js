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
const todoTemplate = document.getElementById('todo-item');

// находим контейнер в который будем добавлять шаблоны
const todoListContainer = document.querySelector('.todo-list');

// Модальное окно и его элементы
const editModal = document.getElementById('editModal');
const closeModal = document.getElementById('closeModal');
const saveButton = document.getElementById('saveButton');
const editTaskText = document.getElementById('editTaskText');
let currentTaskIndex = -1; // Изначально нет выбранной задачи

// Открытие модального окна
function openEditModal(taskIndex) {
  currentTaskIndex = taskIndex;
  const task = todoListData[taskIndex];
  editTaskText.value = task.text; // Заполняем textarea
  editModal.style.display = "flex"; // Показываем модальное окно
}

// Закрытие модального окна
function closeEditModal() {
  editModal.style.display = "none"; // Скрываем модальное окно
}

// Обработчик для закрытия модального окна
closeModal.onclick = closeEditModal;

// Обработчик сохранения изменений
saveButton.onclick = function() {
  if (currentTaskIndex !== -1) {
    // Обновляем текст задачи в массиве
    todoListData[currentTaskIndex].text = editTaskText.value;

    // Перерисовываем весь список задач, чтобы отобразить изменения
    renderTodoList();

    closeEditModal(); // Закрываем модальное окно
  }
};

// Функция для обновления отображения списка задач
function renderTodoList() {
  todoListContainer.innerHTML = '';
// Выполняем итерацию по массиву todoListData. По каждой итерации выполняем:
  todoListData.forEach((task, index) => {

    // Клонируем содержимое тега <template> в переменную
    // const todoItem =
    const todoItem = todoTemplate.content.cloneNode(true);
    // Находим чекбокс и ставим активен ли он в зависимости от статуса задачи (completed)
    // todoItem.querySelector()
    const checkbox = todoItem.querySelector('.todo-list__checkbox');
    checkbox.checked = task.completed;
    // Находим нужный тег и помещаем текст внутрь
    // todoItem.querySelector()
    const textElement = todoItem.querySelector('.todo-list__text');
    textElement.textContent = task.text;
    // Обработчик для кнопки редактирования
    const editButton = todoItem.querySelector('.todo-list__edit-button');
    editButton.onclick = () => openEditModal(index);
    // Вставляем склонированный контент в контейнер
    todoListContainer.appendChild(todoItem);
  });
}

renderTodoList();