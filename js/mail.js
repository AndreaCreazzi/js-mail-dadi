// Controllo javascript
console.log(`JS OK`)

// Costante che contiene qualche email

const userEmails =  [`andrea@libero.it` , `pippo@libero.it` , `pluto@libero.it` , `paperino@libero.it`];
console.log(userEmails)

// Elementi presi dal DOM

const buttonElement = document.getElementById(`btn`)

// Inserisco il bottone in ascolto al click
buttonElement.addEventListener(`click` , function(){
    const emailElement = document.getElementById(`email`).value

    const textElement = document.getElementById(`text`)
    
    // Dati preliminari
    let message = `non puoi entrare`;
    

    // Ciclo di ripetizione e verifica
    for(let i = 0 ; i < userEmails.length ; i++){
        let email =(userEmails[i]);
        // Verifica
        console.log(emailElement.value);
        // Possibilità
        if(emailElement === email){
            message = `puoi entrare`;
        };
    };

    textElement.innerText = message
});


