function soma() {
    let indice = 13;
    let soma = 0;
    let k = 0;
    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }
    console.log(`Valor da variável SOMA: ${SOMA}`);
}
calcularSoma();

function fibonacci(value) {
    let first = 0;
    let second = 1;
    let number = 0;
    while(value > number){
        number = first + second;
        first = second;
        second = number;
    }
    if(number == value){
        console.log(`O valor ${value} está na sequência de Fibonacci`)
    } else{
        console.log(`O valor ${value} não está na sequência de Fibonacci`)
    }
}
fibonacci(21)

function analisarFaturamento() {
    const faturamento = [
        { "dia": 1, "valor": 22174.1664 },
        { "dia": 2, "valor": 24537.6698 },
        { "dia": 3, "valor": 26139.6134 },
        { "dia": 4, "valor": 0.0 },
        { "dia": 5, "valor": 0.0 },
        { "dia": 6, "valor": 26742.6612 },
    ];
    let valores = faturamento.map(d => d.valor).filter(valor => valor > 0);
    let menorValor = Math.min(...valores);
    let maiorValor = Math.max(...valores);
    let mediaMensal = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;
    let diasAcimaDaMedia = valores.filter(valor => valor > mediaMensal).length;
    console.log(`Menor valor de faturamento: ${menorValor}`);
    console.log(`Maior valor de faturamento: ${maiorValor}`);
    console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}
analisarFaturamento();

function percentualFaturamento() {
    const faturamentoPorEstado = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53
    };
    const total = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);
    for (const estado in faturamentoPorEstado) {
        const percentual = (faturamentoPorEstado[estado] / total) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`);
    }
}
percentualFaturamento();

function invertedString(string) {
    let invertedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        invertedString += string[i];
    }
    console.log(`String original: ${string}`);
    console.log(`inverted String: ${invertedString}`);
}
invertedString('Leandro');
