let time = document.querySelector(".time")
let minutes = 0
let seconds = 0
let interval // A variable that represents the timer function. When initialized, this variable is used by "setInterval" to update the time every second.

document.getElementById("pomodoro").addEventListener("click", function() {
    startPomodoro()
})

document.getElementById("shortbreak").addEventListener("click", function() {
    startShortBreak()
})

document.getElementById("longbreak").addEventListener("click", function() {
    startLongBreak()
})

document.getElementById("start").addEventListener("click",function() {
    startTimer()
})

document.getElementById("pause").addEventListener("click",function() {
    pauseTimer()
})

document.getElementById("reset").addEventListener("click",function() {
    resetTimer()
})

let currentTimer = "pomodoro"

function startPomodoro() {
    currentTimer = "pomodoro"
    minutes = 25
    seconds = 0
    startTimer()
}

function startShortBreak() {
    currentTimer = "shortbreak"
    minutes = 5
    seconds = 0
    startTimer()
}

function startLongBreak() {
    currentTimer = "longbreak"
    minutes = 15
    seconds = 0
    startTimer()
}

// A timer is created to call the "updateTimer" function every 1000 milliseconds (1 second).
function startTimer() {
    if(!interval) {
        interval = setInterval(updateTimer, 1000)
    }
}

function pauseTimer() {
    clearInterval(interval)
    interval = null
}

function resetTimer() {
    clearInterval(interval)
    interval = null
    minutes = 0
    seconds = 0
    updateTimeDisplay()
}

function updateTimer() {
    if(seconds === 0) {
        if(minutes === 0) {
            clearInterval(interval)
            interval = null
        }else {
            minutes--
            seconds = 59
        }
    }else {
        seconds--
    }
    updateTimeDisplay()
}

function updateTimeDisplay() {
    const updateMinutes = String(minutes).padStart(2, "0") // Converts the minute to double digits
    const updateSeconds = String(seconds).padStart(2, "0") // Converts the minute to double digits
    time.textContent = `${updateMinutes}:${updateSeconds}`
}