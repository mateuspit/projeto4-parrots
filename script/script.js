alert("oi!");

let gameTitle = "PARROT CARD GAME";
let cardNumbers = 0;

function titleGeneration(){
    const title = document.querySelector("h1");
    // console.log(title);
    title.innerHTML = gameTitle;
    // console.log(title);
}

titleGeneration();

function getCardNumbers(){
    do{
        cardNumbers = prompt("Escolha um número par de 4 a 14 de cartas para jogar.");

        // console.log(cardNumbers);

        // smallThan4 = cardNumbers < 5;
        // higherThan14 = cardNumbers > 14;
        // console.log(smallThan4);
        // console.log(higherThan14);
        

    } while ((cardNumbers < 4) || (cardNumbers > 14));
}

getCardNumbers();

// console.log(cardNumbers);

// function addCardsRandomly(){
//     for(let i = 0; i < cardNumbers; i++){

//     }
// }




