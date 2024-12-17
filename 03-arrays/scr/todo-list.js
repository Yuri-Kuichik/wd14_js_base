function loadTodoListData() {
  const storedData = localStorage.getItem('todoListData');
  return storedData ? JSON.parse(storedData) : [];
}

function saveTodoListData(data) {
  localStorage.setItem('todoListData', JSON.stringify(data));
}

const todoListContainer = document.querySelector('.todo-list');

const todoTemplate = document.getElementById('todo-item');
const editModal = document.getElementById('editModal');
const closeModal = document.getElementById('closeModal');
const saveButton = document.getElementById('saveButton');
const editTaskText = document.getElementById('editTaskText');
const addTaskButton = document.querySelector('.btn-add');
const newTaskInput = document.getElementById('newTaskInput');
const addNewTaskModal = document.getElementById('addNewTaskModal');
const cancelButton = document.getElementById('cancelButton');


let todoListData = loadTodoListData();
let currentTaskIndex = -1;

function openEditModal(taskIndex) {
  currentTaskIndex = taskIndex;
  const task = todoListData[taskIndex];
  editTaskText.value = task.text;
  editModal.style.display = "flex";
}

function closeEditModal() {
  editModal.style.display = "none";
}

function closeAddTaskModal() {
  addNewTaskModal.style.display = "none";
  newTaskInput.value = '';
}

saveButton.onclick = function() {
  if (currentTaskIndex >= 0) {
    todoListData[currentTaskIndex].text = editTaskText.value;
    saveTodoListData(todoListData);
    const taskItem = todoListContainer.children[currentTaskIndex];
    const textElement = taskItem.querySelector('.todo-list__text');
    textElement.textContent = editTaskText.value;
    closeEditModal();
  }
};

addTaskButton.onclick = function() {
  addNewTaskModal.style.display = "flex";
};

cancelButton.onclick = closeAddTaskModal;


document.getElementById('addButton').onclick = function() {
  const newTaskText = newTaskInput.value.trim();
  if (newTaskText) {
    const newTask = {
      text: newTaskText,
      completed: false
    };
    todoListData.push(newTask);
    saveTodoListData(todoListData);
    closeAddTaskModal();
    renderTodoList();
  } else {
    alert('Please enter a task!');
  }
};

function renderTodoList() {
  todoListContainer.innerHTML = '';
  todoListData.forEach((task, index) => {
    const todoItem = todoTemplate.content.cloneNode(true);
    const checkbox = todoItem.querySelector('.todo-list__checkbox');
    checkbox.checked = task.completed;
    const textElement = todoItem.querySelector('.todo-list__text');
    textElement.textContent = task.text;
    const editButton = todoItem.querySelector('.todo-list__edit-button');
    editButton.onclick = () => openEditModal(index);
    todoListContainer.appendChild(todoItem);
  });
}

renderTodoList();
closeModal.onclick = closeEditModal;