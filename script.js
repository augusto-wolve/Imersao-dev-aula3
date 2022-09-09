var numeroSecreto = parseInt(Math.random() * 11)

function Chutar() {
    var chuteNumero = parseInt(document.getElementById('valor').value)
    var resposta = document.getElementById('resultado')


    if (chuteNumero > 10 || chuteNumero < 0) {
        resposta.innerHTML = 'Você errou digite um número entre 0 a 10'
    }


    else if (chuteNumero == numeroSecreto) {
        resposta.innerHTML = 'Você Acertou!!'
    }
    else if (numeroSecreto > chuteNumero) {
        resposta.innerHTML = 'Você errou'
        resposta.innerHTML += `O numero é maior que ${chuteNumero} `
    }
    else if (numeroSecreto < chuteNumero) {
        resposta.innerHTML = 'Você errou'
        resposta.innerHTML += `O número é menor que ${chuteNumero}`
    }


}






