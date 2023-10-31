const screen1 = document.querySelector('#output');
const inputScreen = document.querySelector('#input');

let input1 = 0;
let input2 = 0;
let operator = '';
let reset = 0;
let result;
let test = 0;

function takeNumber () {
    if (reset){
        input2 = Number(this.textContent);
        inputScreen.textContent += ` ${input2}`
    }
    else {
        input1 = Number(this.textContent);
        inputScreen.textContent += ` ${input1}`
    }    
    
}

function operate () {
    switch (operator){
        case '+': return input1 + input2;
        case '-': return input1 - input2;
        case '*': return input1 * input2;
        case '/': return input1 / input2;
    }
}

function takeOperator () {
    let newOperator = this.textContent;
    if (reset){
        result = operate();
        screen1.textContent = `${input1} ${operator} ${input2} ${newOperator}`;
        inputScreen.value = '';
    }
    else
        inputScreen.textContent += ` ${newOperator}`
    operator = newOperator;
    reset ^= 1;
}

function testing () {
    test ^= 1;
    console.log(test);
}

testbtn = document.querySelector('#teste');
testbtn.addEventListener('click', () => {
    testing();
});