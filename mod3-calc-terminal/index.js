const calculadora  = require("./calc")
const prompt = require("prompt-sync")();

function options() {
    console.log(`
    1 - Somar
    2 - Subtrair
    3 - Multiplicar
    4 - Dividir
    0 - Sair
    `);
}

function optionSelected(opcao) {
    const num1 = Number(prompt('Digite o primeiro número: '));
    const num2 = Number(prompt('Digite o segundo número: '));
    if(opcao == "1"){
        return calculadora.soma(num1,num2)
    }

    if(opcao == "2"){
        return calculadora.subtração(num1,num2)
    }

    if(opcao == "3"){
        return calculadora.multiplicação(num1,num2)
    }

    if(opcao == "4"){
        return calculadora.divisão(num1,num2)
    }
}

let opcao;
while(opcao != "0"){
    options();
    opcao = prompt("Qual a operação que iremos realizar? ");
    const resultado = optionSelected(opcao);

    console.log(`O resultado é ${resultado}`);
}
