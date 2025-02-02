const list = document.getElementById("todolist");
const input = document.getElementById("input");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const task = input.value;
  if (task) {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    listItem.addEventListener("click", () => {
      listItem.remove();
    });
    list.appendChild(listItem);
    input.value = "";
  }
});
