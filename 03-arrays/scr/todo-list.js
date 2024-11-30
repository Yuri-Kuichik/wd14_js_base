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

todoListData.forEach((element) => {
  let todoItem = itemTemplate.content.cloneNode(true);
  todoItem.querySelector(".todo-list__checkbox").checked = element.completed;
  todoItem.querySelector(".todo-list__text").textContent = element.text;
  container.appendChild(todoItem);
})