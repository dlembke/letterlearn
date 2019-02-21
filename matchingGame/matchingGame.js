//simplify the code. Don't need two functions to generate buttons, create clicking functionality off the arrays, figure out lowercase for values in order for functionality to work
'use strict'

let letterArr = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('');
let shuffledUpperCaseArr = [];
let shuffledLowerCaseArr = [];
let newGame = document.getElementById('newGame');
let result = document.querySelector('#result');

//sort through letterArr and assign each letter to arrays
shuffledUpperCaseArr.push(...shuffle(letterArr));
shuffledLowerCaseArr.push(...shuffle(letterArr));

//create buttons for each array
let upperCaseButtonsArr = shuffledUpperCaseArr.map(function(arr) {
    return createUpperCaseLetterButtons(arr);
});
let lowerCaseButtonsArr = shuffledLowerCaseArr.map(function(arr) {
    return createLowerCaseLetterButtons(arr);
});

//addEventListeners
let clickedU;
let clickedL;
let upperCaseElements = document.getElementsByClassName('upperCase');
upperCaseElements.addEventListener('click', upperEvent());

let lowerCaseElements = document.getElementsByClassName('lowerCase');
lowerCaseElements.addEventListener('click', lowerEvent());

//compare clicked events and actions for equal clicked content and non equal
if (clickedU.textContent === clickedL.textContent) {
    alert("You're right");
} else {
    alert('nope')
}
//event functions to select letter from each arr
function upperEvent() {
    for (let i = 0; i < upperCaseElements.length; i++) {
        upperCaseElements[i].addEventListener('click', function(){
            clickedU = this.textContent;
        })
    }
}
function lowerEvent() {
    for (let i = 0; i < lowerCaseElements.length; i++) {
        lowerCaseElements[i].addEventListener('click', function(){
            clickedL = this.textContent;
        })
    }
}



//this function shuffles the array order, not sure how it works
function shuffle(arr) {
    let ctr = arr.length;
    let temp;
    let index;
    //while there are elements in the array
    while (ctr > 0) {
        //pick random index
        index = Math.floor(Math.random() * ctr);
        //decrease ctr by 1
        ctr--
        //swap the last element with it
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp
    }
    return arr;
}
function createUpperCaseLetterButtons (arr) {
    let letterButtons = document.createElement('button');
    letterButtons.classList.add('upperCase', 'largeLetter'); //fix largeLetter class, separate two letterarr sections
    let t = document.createTextNode(arr);
    letterButtons.appendChild(t);
    document.body.appendChild(letterButtons);
}
function createLowerCaseLetterButtons (arr) {
    let letterButtons = document.createElement('button');
    letterButtons.classList.add('lowerCase', 'smallLetter'); //fix largeLetter class, separate two letterarr sections
    let t = document.createTextNode(arr);
    letterButtons.appendChild(t);
    document.body.appendChild(letterButtons);
}









//letterArr.forEach(function(letter) {
//   let num = Math.floor(Math.random() * letterArr.length);
//    upperCaseArr.push(letter);
//    lowerCaseArr.push(letter);
//});

//shuffledUpperCaseArr.push(...shuffle(upperCaseArr)); //creates new shuffled array
//shuffledLowerCaseArr.push(...shuffle(lowerCaseArr)); //creates new shuffled array