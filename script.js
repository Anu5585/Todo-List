function addTodo() {
  const todoInput = document.getElementById("newTodo");
  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    const todoList = document.getElementById("todoList");

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Todo text
    const todoTextElement = document.createElement("span");
    todoTextElement.innerText = todoText;

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function () {
      todoList.removeChild(todoItem);
    };

    todoItem.appendChild(checkbox);
    todoItem.appendChild(todoTextElement);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);

    // Clear input
    todoInput.value = "";

    
  }
}
