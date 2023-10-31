const screen1 = document.querySelector('#output');
const inputScreen = document.querySelector('#input');
const numButtons = document.querySelectorAll('.numbtn');
const opButtons = document.querySelectorAll('.btn');

let input1 = '';
let input2 = '';
let operator = '';
let reset = 0;
let result;
let test = 0;

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

//test section
function testing () {
    test ^= 1;
    console.log(test);
}

testbtn = document.querySelector('#teste');
testbtn.addEventListener('click', () => {
    testing();
});