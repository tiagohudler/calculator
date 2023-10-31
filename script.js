let input1 = 0;
let input2 = 0;
let operator = '';
let reset = 0;
let result;

function takeNumber () {
    if (reset)
        input2 = Number(this.textContent);
    else
        input1 = Number(this.textContent);
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
    operator = this.textContent;
    if (reset){
        result = operate();
        screen1.textContent = `${input1} ${operator} ${input2}`;
        inputScreen.value = '';
    }
    reset ^= reset;
}

