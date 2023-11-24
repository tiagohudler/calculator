const screen1 = document.querySelector('#output');
const inputScreen = document.querySelector('#input');
const numButtons = document.querySelectorAll('.numbtn');
const opButtons = document.querySelectorAll('.btn');
const clearbtn = document.querySelector('#clearbtn');
const veter = document.querySelector('#veter');
const body = document.querySelector('body');

let input1 = '';
let input2 = '';
let operator = '';
let reset = 0;
let result;

function takeNumber (arg) {
    if (reset){
        input2 += arg.textContent;
        inputScreen.textContent += arg.textContent;
    }
    else {
        input1 += arg.textContent;
        inputScreen.textContent += arg.textContent;
    }    
    
}

function operate () {
    let a = Number(input1);
    let b = Number(input2);
    switch (operator){
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

function takeOperator (arg) {
    let newOperator = arg.textContent;
    if (reset){
        result = operate();
        screen1.textContent = `${input1} ${operator} ${input2} ${newOperator}`;
        inputScreen.textContent = result;
        if (newOperator != '='){
            screen1.textContent = `${input1} ${operator} ${input2}`;
            inputScreen.textContent += ` ${newOperator} `
            reset ^= 1;
        }
        input1 = result;
        input2 = '';
    }
    else
        inputScreen.textContent += ` ${newOperator} `;
    operator = newOperator;
    reset ^= 1;
}

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        takeNumber(button);
    });
});

opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        takeOperator(button);
    });
});

clearbtn.addEventListener('click', () => {
    reset = 0;
    inputScreen.textContent = '';
    screen1.textContent = '';
    input1 = '';
    input2 = '';
    operator = '';
    result = null;
});

veter.addEventListener('click', () => {
    const bodyid = body.id === "oii" ? '' : "oii";
    body.id = bodyid;
});

