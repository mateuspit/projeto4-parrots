const gameTitle = "PARROT CARD GAME";
let cardNumbers = 0;
const possibleCards = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];
const cards = [];
let rounds = 0;
let desvirar = 0;
let imgList;
let firstCardSrc = [];
let secondCardSrc = [];
let firstThis = [];
let secondThis = [];

function titleGeneration(){
    const title = document.querySelector("h1");
    // console.log(title);
    title.innerHTML = gameTitle;
    // console.log(title);
}

// titleGeneration();

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

// getCardNumbers();


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
            <div onclick="turnOnCard(this)" class="card">
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

// addCardsRandomly();

function turnOnCard(showThis){
    desvirar++;

    //desvirando as cartas
    const turnedFrontCard = showThis.querySelector(".front-face");
    const turnedBackCard = showThis.querySelector(".back-face");

    if (!turnedFrontCard.classList.contains("hide-bird")){
        rounds++;
    }

    turnedFrontCard.classList.add("hide-bird");
    turnedBackCard.classList.add("show-gif");

    //analisando as cartas
    if(desvirar === 1){
        imgList = showThis.getElementsByTagName("img");
        firstCardSrc = imgList[1].getAttribute("src");
        firstThis[0] = turnedFrontCard;
        firstThis[1] = turnedBackCard;
        // console.log(firstCardSrc);
    } else if (desvirar === 2){
        desvirar = 0;
        imgList = showThis.getElementsByTagName("img");
        secondCardSrc = imgList[1].getAttribute("src");
        secondThis[0] = turnedFrontCard;
        secondThis[1] = turnedBackCard;
        // console.log(secondCardSrc);
        if(secondCardSrc === firstCardSrc){
            console.log("Nada acontece");
            // console.log(firstThis[0]);
            // console.log(firstThis[1]);
            // console.log(secondThis[0]);
            // console.log(secondThis[1]);
        } else {
            // debugger;
            setTimeout(delayOneSegHideCards, 500); 
            console.log("Vira as cartas");
        }        
    }
}

function delayOneSegHideCards(){
    firstThis[0].classList.remove("hide-bird");
    firstThis[1].classList.remove("show-gif");
    secondThis[0].classList.remove("hide-bird");
    secondThis[1].classList.remove("show-gif");
}




// RODANDO O PROGRAMA
titleGeneration();
getCardNumbers();
addCardsRandomly();






