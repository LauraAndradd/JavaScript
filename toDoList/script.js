const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText) {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="deleteButton">Remover</button>
        `;
        taskList.appendChild(li);
        taskInput.value = "";

        const deleteButton = li.querySelector(".deleteButton");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(li);
        });
    }
}
