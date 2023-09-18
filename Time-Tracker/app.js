const addButton = document.querySelector("#addTask")
const taskContainer = document.querySelector(".task-container")
const taskInput = document.querySelector("input[type='text']")

addButton.addEventListener("click", () => {
    const taskTitleValue = taskInput.value.trim()

    if(taskTitleValue.trim() === "") {
        return
    }
    
    const newTaskDiv = document.createElement("div")
    newTaskDiv.classList.add("task", "d-flex", "justify-content-between", "flex-column", "mt-3")
    
    const taskTitle = document.createElement("div")
    taskTitle.classList.add("task-title")
    taskTitle.innerHTML = `<p>${taskTitleValue}</p>`

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

    const taskDelete = document.createElement("div")
    taskDelete.classList.add("task-edit", "mt-2")

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete", "btn", "btn-outline-danger")
    deleteButton.textContent = "Delete Task"

    timeDiv.appendChild(timeActions)
    timeActions.appendChild(startButton)
    timeActions.appendChild(stopButton)
    timeActions.appendChild(resetButton)

    taskDelete.appendChild(deleteButton)

    newTaskDiv.appendChild(taskTitle)
    newTaskDiv.appendChild(timeDiv)
    newTaskDiv.appendChild(taskDelete)

    taskContainer.appendChild(newTaskDiv)

    taskInput.value = ""

})
