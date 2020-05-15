function add(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function mult(num1, num2) {
    return num1 * num2
}

function div(num1, num2) {
    if (num2 == 0) {
        return 0;
    } 
    return num1 / num2
}

const result = add(20,1);

console.log(result);

module.exports = {
    soma: add,
    subtração: sub,
    multiplicação: mult,
    divisão: div
}