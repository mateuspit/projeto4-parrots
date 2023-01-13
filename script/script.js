const gameTitle = "PARROT CARD GAME";
let cardNumbers = 0;
const possibleCards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
const cards = [];

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
        

    } while ((cardNumbers < 4) || (cardNumbers > 14) || cardNumbers%2);
}

getCardNumbers();


function comparador() { 
	return Math.random() - 0.5; 
}



function addCardsRandomly(){

    for(let i = 0; i < cardNumbers; i++){
        cards[i] = possibleCards[i];
    }

    cards.sort(comparador);

    for(let i = 0; i < cardNumbers; i++){
        const tableContent = document.querySelector(".cardTable");

        tableContent.innerHTML = tableContent.innerHTML + `
            <div class="card">
                <div class="front-face face">
                    <img src="/img/back.png" alt="Imagem do fundo da carta" width="100px">
                </div> <!-- FRONT FACE -->
                <div class="back-face face">
                    <img src="/img/${cards[i]}.gif" alt="Gif numero 1" width="100px"/>
                </div> <!-- BACK FACE -->
            </div>
        ` ;
    }    
}

addCardsRandomly();






