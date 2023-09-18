const addButton = document.querySelector("#addTask")
const taskContainer = document.querySelector(".task-container")
const taskInput = document.querySelector("input[type='text']")

let timerInterval // Stores the timer
let isTimerRunning = false;
let seconds = 0 // Variable used to start the timer

// Updates the timer
function updateTimer() {
  seconds++;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const timeDisplay = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  const time = document.querySelector(".time");
  time.textContent = timeDisplay;
}

// When the Add task button is clicked
addButton.addEventListener("click", () => {
    const taskTitleValue = taskInput.value.trim()

    if(taskTitleValue.trim() === "") {
        return
    }

    // New task is created
    const newTaskDiv = document.createElement("div")
    newTaskDiv.classList.add("task", "d-flex", "justify-content-between", "flex-column", "mt-3")
    
    const taskTitle = document.createElement("div")
    taskTitle.classList.add("task-title")
    taskTitle.innerHTML = `<p>${taskTitleValue}</p>`

    const timeDiv = document.createElement("div")
    timeDiv.classList.add("timeDiv")
    
    const time = document.createElement("div")
    time.classList.add("time")
    time.textContent = "00:00:00"

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
    taskDelete.classList.add("taskDelete", "mt-2")

    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete", "btn", "btn-outline-danger")
    deleteButton.textContent = "Delete Task"

    // Clicking the Delete button deletes the task
    deleteButton.addEventListener("click", () => {
        // Finds the parent (newTaskDiv) of the task to manage
        const taskItem = deleteButton.closest(".task")

        // Removes this task from taskContainer
        taskContainer.removeChild(taskItem)
    });

    // Start the timer when you click the start button
    startButton.addEventListener("click", () => {
        if (!timerInterval) {
            timerInterval = setInterval(updateTimer, 1000);
            isTimerRunning = true;
        }
    });

    // Clicking the stop button stops the timer
    stopButton.addEventListener("click", () => {
        clearInterval(timerInterval);
        isTimerRunning = false;
    });

    // Clicking the reset button resets the timer
    resetButton.addEventListener("click", () => {
        const time = document.querySelector(".time");
        if (isTimerRunning) {
            clearInterval(timerInterval);
            isTimerRunning = false;
        }
        seconds = 0;
        time.textContent = "00:00:00"
    });

    // Adds all created elements to new task div
    timeDiv.appendChild(time)
    timeDiv.appendChild(timeActions)
    timeActions.appendChild(startButton);
    timeActions.appendChild(stopButton);
    timeActions.appendChild(resetButton);

    taskDelete.appendChild(deleteButton);

    newTaskDiv.appendChild(taskTitle);
    newTaskDiv.appendChild(timeDiv);
    newTaskDiv.appendChild(taskDelete);

    // Adds the new task div to the task container
    taskContainer.appendChild(newTaskDiv);

    // Clears input field after task is added
    taskInput.value = ""
})

