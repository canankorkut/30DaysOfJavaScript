let result = document.querySelector(".result")

document.getElementById("number0").addEventListener("click", function(){
    addNumber("0")
})

document.getElementById("number1").addEventListener("click", function(){
    addNumber("1")
})

document.getElementById("number2").addEventListener("click", function(){
    addNumber("2")
})

document.getElementById("number3").addEventListener("click", function(){
    addNumber("3")
})

document.getElementById("number4").addEventListener("click", function(){
    addNumber("4")
})

document.getElementById("number5").addEventListener("click", function(){
    addNumber("5")
})

document.getElementById("number6").addEventListener("click", function(){
    addNumber("6")
})

document.getElementById("number7").addEventListener("click", function(){
    addNumber("7")
})

document.getElementById("number8").addEventListener("click", function(){
    addNumber("8")
})

document.getElementById("number9").addEventListener("click", function(){
    addNumber("9")
})

document.getElementById("point").addEventListener("click", function(){
    addPoint()
})

document.getElementById("c").addEventListener("click", function(){
    erase()
})

document.getElementById("ce").addEventListener("click", function(){
    clean()
})

document.getElementById("summation").addEventListener("click", function(){
    process("+")
})

document.getElementById("extraction").addEventListener("click", function(){
    process("-")
})

document.getElementById("multiplication").addEventListener("click", function(){
    process("*")
})

document.getElementById("slash").addEventListener("click", function(){
    process("/")
})

document.getElementById("percent").addEventListener("click", function(){
    percent()
})

document.getElementById("equal").addEventListener("click", function(){
    calculate()
})

let defaultResult = ""

function addNumber(number) {
    defaultResult += number
    updateResult()
}

function addPoint() {
    if(!defaultResult.includes(".")) {
        defaultResult += "."
        updateResult()
    }
}

function erase() {
    defaultResult = ""
    updateResult()
}

function clean() {
    defaultResult = defaultResult.slice(0, -1)
    updateResult()
}

function process(operator) {
    defaultResult += " " + operator + " "
    updateResult()
}

function percent() {
    defaultResult = eval(defaultResult + " / 100")
    updateResult()
}

function calculate() {
    try {
        defaultResult = eval(defaultResult)
        updateResult()
    } catch(error) {
        defaultResult = "Error"
        updateResult()
    }
}

function updateResult() {
    result.textContent = defaultResult
}