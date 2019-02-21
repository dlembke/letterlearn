'use strict'
//find a way to randomize vowel display for capital letters

let smallLetterArr = ("aeiouy").split("");
let allLetters = document.getElementsByClassName('letters');
let newGame = document.getElementById('newGame');
const userSelection = document.getElementById('userLetterSelection');
let result = document.querySelector('#result');
let displayBox = document.getElementById('randomDisplay'); //display box for random letter
let randomLetter = random();
displayBox.textContent = randomLetter;

for (let i = 0; i < allLetters.length; i++){
    allLetters[i].textContent = smallLetterArr[i];
    allLetters[i].addEventListener('click', function(){
    //outcomes for random number and selection
    let clickedLetter = this.textContent;
    if(clickedLetter !== randomLetter){
        result.textContent = "Try Again";
        //allLetters[i].style.visibility = 'hidden';
        allLetters[i].classList.add('disappear');
    } else {
        result.textContent = "You win";
        userSelection.style.visibility = 'hidden';
        // userSelection.parentNode.removeChild(userSelection); //removes buttons after a win
    }
    newGame.addEventListener('click', function(){
        randomLetter = random();
        displayBox.textContent = randomLetter;
        result.textContent = '';
        allLetters[i].classList.remove('disappear');
        if (userSelection.style.visibility === 'hidden') {
            userSelection.style.visibility = 'visible';
        }
    });
    });
}
newGame.addEventListener('click', function(){
    randomLetter = random();
    displayBox.textContent = randomLetter;
    result.textContent = '';
    if (userSelection.style.visibility === 'hidden') {
        userSelection.style.visibility = 'visible';
    }
});

function random() {
    var random = Math.floor(Math.random() * smallLetterArr.length);  
    return smallLetterArr[random];
}