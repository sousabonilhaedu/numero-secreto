const elementoChute = document.querySelector('#chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    chute = event.results[0][0].transcript;
    viewUserSpeak(chute);
    validacao(chute);
}

function viewUserSpeak(chute) {
    elementoChute.innerHTML = `
        <div>Você disse: </div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', function(){
    recognition.start();
})