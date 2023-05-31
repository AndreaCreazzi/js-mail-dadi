// Controllo javascript
console.log(`JS OK`);

// Recupero l'elemnto dal DOM

const gameElement = document.getElementById(`game`);
const resultElement = document.getElementById(`result`)

// Dati Preliminari

let message = ``

// Metto in ascolto il bottone

gameElement.addEventListener(`click` , function(){
    const randomUser = Math.floor(Math.random() * 6) + 1;
    const randomCpu = Math.floor(Math.random() * 6) + 1;
    console.log(`il tuo numero user è `+  randomUser);
    console.log(`il tuo numero CPU è ` + randomCpu);

    if(randomUser < randomCpu){
        message = `Ha vinto la CPU`
    }else if(randomCpu < randomUser){
        message = `ha vinto l'user`
    }else if(randomCpu === randomUser){
        message = `Pareggio`
    }

    resultElement.innerText = message
})