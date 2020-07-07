const fibonacci = () => {
    const lista = [0, 1];
    let ultimoIndex = 1;
    let prox;
    while (lista[ultimoIndex] <= 350) {
        prox = lista[ultimoIndex] + lista[ultimoIndex - 1];
        lista.push(prox);
        ultimoIndex = ultimoIndex + 1;
    }
    return lista;
}

const recursiveFibo = (position) => {

    if (position == 0) {
        return 0;
    } else if (position == 1) {
        return 1;
    }
    return recursiveFibo(position - 1) + recursiveFibo(position - 2);
}

const isFibonnaci = (num) => {
    return fibonacci().includes(num);
}


module.exports = {
    fibonacci,
    isFibonnaci
}