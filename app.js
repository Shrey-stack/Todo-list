//SELECTOR

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
console.log(todoButton);
//Event
document.getElementById("todo-button").addEventListener("click", addTodo);
document
  .getElementsByClassName("todo-list")
  .addEventListener("click", deletecheck);

//todoButton.addEventListener("click", addTodo);

//Function
function addTodo(event) {
  event.preventDefault();

  //Event
  //todoButton.addEventListener("click", addTodo);

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Check Mark
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"> </i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //trash
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"> </i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to list
  todoList.appendChild(todoDiv);

  //clearing the input
  todoInput.value = "";

  //Fafa trash
  function deletecheck(e) {
    const item = e.target;
  }
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}
"# Todo-list" 
