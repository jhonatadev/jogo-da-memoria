const cardBoard = document.querySelector("#cardboard");
const images =  [
    'angular.svg',
    'aurelia.svg',
    'backbone.svg',
    'ember.svg',
    'react.svg',
    'vue.svg'
];

let cardHTML = '';

images.forEach(img => {
    cardHTML += `
        <div class="memoria-card" data-card="${img}">
            <img class="front-face" src="img/${img}">
            <img class="back-face" src="img/js-badge.svg">
        </div>
    `;
});

cardBoard.innerHTML = cardHTML + cardHTML;

/* Fim renderização HTML */

const cards = document.querySelectorAll('.memoria-card');
let primeiroCard, segundoCard;
let trancarCard = false;


function flipCard(){
    if (trancarCard) return false;

    this.classList.add('flip');

    if (!primeiroCard) {
        primeiroCard = this;
        return false;
    }

    segundoCard = this;

    verificarCards();
}

function verificarCards(){
    let combineCards = primeiroCard.dataset.card === segundoCard.dataset.card;

    !combineCards ? desabilitarCards(): resetarCards(combineCards);
}

function desabilitarCards() {
    trancarCard = true;

    setTimeout(() => {        
        primeiroCard.classList.remove('flip');
        segundoCard.classList.remove('flip');

        resetarCards();
    }, 1000);
}

(function baralhar() {
   cards.forEach(card =>{
       let aleatorio = Math.floor(Math.random() * 12);
       card.style.order = aleatorio;
   }) 
})()


function resetarCards(combineCards = false) {
    if (combineCards) {
        primeiroCard.removeEventListener('click', flipCard);
        segundoCard.removeEventListener('click', flipCard);
    }
    [primeiroCard, segundoCard, trancarCard] = [null, null, false];
}

cards.forEach(card => card.addEventListener('click', flipCard));