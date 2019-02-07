// console.log("Connected")
window.addEventListener("load", bindEvents)

function bindEvents() {
    let numButtons = document.querySelectorAll('.value')
    let oprButtons = document.querySelectorAll('.operator')
    document.querySelector('#zero').addEventListener('click', zero)
    document.querySelector('#decimal').addEventListener('click', printDecimal)
    document.querySelector('#clear').addEventListener('click', clear)
    document.querySelector('#equal').addEventListener('click', equal)
    document.querySelector('#backspace').addEventListener('click', backspace)
    numButtons.forEach(button => button.addEventListener('click', printinnerText))
    oprButtons.forEach(button => button.addEventListener('click', printOperator))
}

let opFlag = false
function printOperator() {
    if (document.querySelector('#input').innerText == '' && (this.innerText == '*' || this.innerText == '/')) {
        document.querySelector('#input').innerText = ''
    }
    else if (opFlag == true) {
        document.querySelector('#input').innerText = document.querySelector('#input').innerText.substring(0, document.querySelector('#input').innerText.length - 1) + this.innerText
    }
    else {
        document.querySelector('#input').innerText += this.innerText
        opFlag = !opFlag
        isEqual = false
        decimalFlag = false
    }
}

// print innerText in input
function printinnerText() {
    if (isEqual) {
        document.querySelector('#input').innerText = ''
        isEqual = !isEqual
    }
    document.querySelector('#input').innerText += this.innerText
    opFlag = false
}

function zero() {
    if (opFlag == false && !document.querySelector('#input').innerText == '') {
        document.querySelector('#input').innerText += this.innerText
    }
}

let decimalFlag = false
function printDecimal() {
    if (!decimalFlag) {
        document.querySelector('#input').innerText += this.innerText
        decimalFlag = !decimalFlag
    }
}

// clear the input screen
function clear() {
    document.querySelector('#input').innerText = ''
    opFlag = false
    isEqual = false
    decimalFlag = false
}

// evaluate the expression
let isEqual = false
function equal() {
    document.querySelector('#input').innerText = eval(document.querySelector('#input').innerText)
    isEqual = !isEqual
}

// backspace function
function backspace() {
    let str = document.querySelector('#input').innerText
    document.querySelector('#input').innerText = str.substring(0, str.length - 1)
}
