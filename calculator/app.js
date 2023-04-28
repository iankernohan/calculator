const display = document.querySelector('h1');
const nums = document.querySelectorAll('.num');
const ac = document.querySelector('#AC');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const singOperators = document.querySelectorAll('.singleOperator');


let a = 0;
let b = 0;
let operator = '';
let ans = 0;
let newCalc = true;

function clear() {
    a = 0;
    b = 0;
    operator = '';
    newCalc = true;
}

for (let num of nums) {
    num.addEventListener('click', function () {
        let digit = num.textContent;
        if (newCalc) {
            display.textContent = digit;
            newCalc = false;
        }
        else {
            if (display.textContent == 0) {
                display.textContent = digit;
            } else {
                display.textContent += digit;
            }
        }
    })
}

for (let op of operators) {
    op.addEventListener('click', function () {
        operator = op.value;
        a = display.textContent;
        display.textContent = 0;
    })
}

for (let op of singOperators) {
    op.addEventListener('click', function () {
        a = display.textContent;
        if (op.textContent === '%') {
            ans = a / 100;
        }
        else if (op.textContent === 'Sqr') {
            ans = Math.sqrt(a);
        }
        else if (op.textContent === 'Sq') {
            ans = a ** 2;
        }
        display.textContent = ans;
    })
}

ac.addEventListener('click', function () {
    display.textContent = 0;
    clear();
})

equals.addEventListener('click', function () {
    b = display.textContent;
    a = parseFloat(a);
    b = parseFloat(b);
    if (operator === '*') {
        ans = a * b;
    }
    else if (operator === '/') {
        ans = a / b;
    }
    else if (operator === '+') {
        ans = a + b;
    }
    else if (operator === '-') {
        ans = a - b;
    }
    display.textContent = ans;
    clear()
})