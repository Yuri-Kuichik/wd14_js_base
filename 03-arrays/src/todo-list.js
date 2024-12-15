const todoListData = JSON.parse(localStorage.getItem('todoListData')) || [
  { text: 'Do homework!', completed: true },
  { text: 'Do exercise!', completed: true },
  { text: 'Read JS book!', completed: false }
];

const template = document.getElementById("todo-item");
const container = document.getElementById("todo-container");
const addTaskButton = document.getElementById("addTaskButton");  
const modal = document.getElementById("modal");
const modalCancelButton = document.getElementById("modal-cancel");
const modalAddButton = document.getElementById("modal-add");
const modalInput = document.getElementById("taskInput");  

let editIndex = -1;

function renderTodoList() {
  container.innerHTML = '';
  todoListData.forEach((task) => {
    const todoItem = template.content.cloneNode(true);

    const checkbox = todoItem.querySelector(".todo-list__checkbox");
    checkbox.checked = task.completed;

    const textElement = todoItem.querySelector(".todo-list__text");
    textElement.textContent = task.text;

    container.appendChild(todoItem);
  });
}

renderTodoList();

addTaskButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

modalCancelButton.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalInput.value = '';
});

modalAddButton.addEventListener('click', () => {
  const newTaskText = modalInput.value.trim();

  if (newTaskText !== '') {
    const newTask = { text: newTaskText, completed: false };
    todoListData.push(newTask);
    localStorage.setItem('todoListData', JSON.stringify(todoListData));
    renderTodoList();
    modal.classList.add('hidden');
    modalInput.value = '';
  } else {
    alert('Please enter a task');
  }
});
