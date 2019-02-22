const cardBoard = document.querySelector("#cardBoard");
const images =  [
    'angular.svg',
    'aurilia.sgv',
    'backbone..svg',
    'ember.svg ',
    'js-badge.sgv',
    'react.svg',
    'vue.svg'
];

let carHTML = '';

images.forEach(img => {
    cardHTML += `
        <div>
            <img src="img/${img}">
            <img src="img/js-badge.svg">
        </div>
    `
})