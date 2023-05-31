// Controllo javascript
console.log(`JS OK`)

// Costante che contiene qualche email

const userEmails =  [`andrea@libero.it` , `pippo@libero.it` , `pluto@libero.it` , `paperino@libero.it`];

// Elementi presi dal DOM

const buttonElement = document.getElementById(`btn`)

// Inserisco il bottone in ascolto al click
buttonElement.addEventListener(`click` , function(){
    const emailElement = document.getElementById(`email`)

    let email = ``;
    
    const textElement = document.getElementById(`text`)

    let message = ``
    // Ciclo di ripetizione e verifica

    for(let i = 0 ; i < userEmails.length ; i++){
        email = (userEmails[i]);
        // Verifica
        console.log(emailElement);
        // Possibilità
        if(emailElement.value != email){
            console.log(`non puoi entrare`)
        }else{
            console.log(`puoi entrare`)
        }
    };
    textElement.innerText = message
});

