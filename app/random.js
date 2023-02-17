const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = randomizer();

function randomizer() {
    return parseInt(Math.random() * maiorValor + 1);
}

const elementoMaiorValor = document.querySelector('#valor-maior');
elementoMaiorValor.innerHTML = maiorValor;

const elementoMenorValor = document.querySelector('#valor-menor');
elementoMenorValor.innerHTML = menorValor;

console.log(numeroSecreto);