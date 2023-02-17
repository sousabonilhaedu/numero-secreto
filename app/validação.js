function validacao(chute){
    const numero = +chute;

    if(Number.isNaN(numero)){
        elementoChute.innerHTML += `
            <div>Você tem que dizer um número! abestado</div>
        `
        return
    }
    
    if(numero > maiorValor  || numero < menorValor){
        elementoChute.innerHTML += `
        <div>O número tem que estar entre ${menorValor} e ${maiorValor}</div>
    `
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1>Parabéns, você acertou o número secreto!</h1>
            <h3>O número secreto era ${chute} :)</h3>

            <a href="#" class="botao" id="jogar-dnv">Jogar novamente</a>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

document.body.addEventListener('click', function(event){
    if(event.target.id == 'jogar-dnv'){
        window.location.reload();
    }
})