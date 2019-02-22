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


function flipCard(){
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

    !combineCards ? resetarCards(): true;
}

function resetarCards() {
    setTimeout(() => {        
        primeiroCard.classList.remove('flip');
        segundoCard.classList.remove('flip');
    }, 1000);


}

cards.forEach(card => card.addEventListener('click', flipCard));