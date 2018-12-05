let titleElem = document.querySelector('.content__button_left');
let listElem = document.querySelector('.content__button_left');

titleElem.onclick = function() {
    listElem.classList.toggle('open');
};

let titleElem1 = document.querySelector('.content__button_right');
let listElem1 = document.querySelector('.content__button_right');

titleElem1.onclick = function() {
    listElem1.classList.toggle('open');
};

function yesnoCheck() {
    if (document.getElementById('yesCheck').checked) {
        document.getElementById('ifYes').style.display = 'block';
    }
    else document.getElementById('ifYes').style.display = 'none';

}






