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

const todoListContainer = document.querySelector('.todo-list');

const todoTemplate = document.getElementById('todo-item');
const editModal = document.getElementById('editModal');
const closeModal = document.getElementById('closeModal');
const saveButton = document.getElementById('saveButton');
const editTaskText = document.getElementById('editTaskText');
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

closeModal.onclick = closeEditModal;

saveButton.onclick = function() {
  if (currentTaskIndex >= 0) {
    todoListData[currentTaskIndex].text = editTaskText.value;
    const taskItem = todoListContainer.children[currentTaskIndex];
    const textElement = taskItem.querySelector('.todo-list__text');
    textElement.textContent = editTaskText.value;
    closeEditModal();
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