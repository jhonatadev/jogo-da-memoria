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
        <div class="memoria-card">
            <img class="front-face" src="img/${img}">
            <img class="back-face" src="img/js-badge.svg">
        </div>
    `;
});

cardBoard.innerHTML = cardHTML + cardHTML;

/* Fim renderização HTML */

const cards = document.querySelectorAll('.memoria-card');

function flipCard(){
    this.classList.add('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));