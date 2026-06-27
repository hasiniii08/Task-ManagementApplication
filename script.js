const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Done";
  completeBtn.classList.add("complete-btn");

  completeBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  buttons.appendChild(completeBtn);
  buttons.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttons);

  taskList.appendChild(li);

  taskInput.value = "";
}