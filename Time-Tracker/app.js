const addButton = document.querySelector("#addTask")
const taskContainer = document.querySelector(".task-container")

addButton.addEventListener("click", () => {
    const newTaskDiv = document.createElement("div")
    newTaskDiv.classList.add("task", "d-flex", "justify-content-between", "flex-column", "mt-3")
    
    const taskTitle = document.createElement("div")
    taskTitle.classList.add("task-title")
    taskTitle.innerHTML = `<p>Count-up Timer</p>`

    const timeDiv = document.createElement("div")
    timeDiv.classList.add("time")
    timeDiv.textContent = "00:00:00"

    const timeActions = document.createElement("div")
    timeActions.classList.add("time-actions")

    const startButton = document.createElement("button")
    startButton.classList.add("start", "btn", "btn-outline-secondary")
    startButton.textContent = "Start"

    const stopButton = document.createElement("button")
    stopButton.classList.add("stop", "btn", "btn-outline-secondary")
    stopButton.textContent = "Stop"

    const resetButton = document.createElement("button")
    resetButton.classList.add("reset", "btn", "btn-outline-secondary")
    resetButton.textContent = "Reset"

    const taskEdit = document.createElement("div")
    taskEdit.classList.add("task-edit", "d-flex", "justify-content-center", "mt-2")

    const editButton = document.createElement("button")
    editButton.classList.add("edit", "btn", "btn-outline-light")
    editButton.textContent = "Edit Task"

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete", "btn", "btn-outline-danger", "ms-2")
    deleteButton.textContent = "Delete Task"
    
    timeActions.appendChild(startButton);
    timeActions.appendChild(stopButton);
    timeActions.appendChild(resetButton);

    taskEdit.appendChild(editButton);
    taskEdit.appendChild(deleteButton);

    newTaskDiv.appendChild(taskTitle);
    newTaskDiv.appendChild(timeDiv);
    newTaskDiv.appendChild(timeActions);
    newTaskDiv.appendChild(taskEdit);

    taskContainer.appendChild(newTaskDiv);

})