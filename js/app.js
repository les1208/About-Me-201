'use strict';

alert('Wizards Welcome (Muggles Tolerated!) What is your name?');


var correctAnswer = 0;


function questionOne() {
    var game = prompt('Are you ready to guess who I am?');
    if (game.toLowerCase() === 'yes') {
        alert('Great, lets get started');
    } else if (game.toLowerCase() === 'no') {
        alert('Error');
    }
}

function questionTwo() {
    var identity = prompt('Am I a female?');
    if (identity.toLowerCase() === 'yes') {
        alert('You are correct, five points for Slytherin!');
    } else if (identity.toLowerCase() === 'no') {
        alert('Try again');
    }
}

function questionThree() {
    var myHeight = prompt('Am I tall?');
    if (myHeight.toLowerCase() === 'yes') {
        alert('Another five points for Slytherin');
        correctAnswer++;
    } else if (myHeight.toLowerCase() === 'no') {
        alert('you lose 10 points')
    }
}

function questionFour() {
    var language = prompt('Do I speak another language?');
    if (language.toLowerCase() === 'yes') {
        alert('More points for Slytherin');
        correctAnswer++;
    } else if (language.toLowerCase() === 'no') {
        alert('You are on a role losing points!')
    }
}

function questionFive() {
    var spokenLanguage = prompt('Is spanish the language I speak?');
    if (spokenLanguage.toLowerCase() === 'yes') {
        alert('Ding, ding, ding!');
        correctAnswer++;
    } else if (spokenLanguage.toLowerCase() === 'no') {
        alert('Try again!');
    }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();


// guessing game

function questionSix() {
    var guessNumber = prompt('Guess the correct number. 1-10');

    var answer = 6;

    for (var i = 0; i < 4; i++) {
        var guess = parseInt(prompt('Whats your guess?'));
        if (guess === answer) {
            alert('Your answer was correct');
            correctAnswer++;
            break;
        } else if (guess > answer) {
            alert('Sorry too high');
        } else if (guess < answer) {
            alert('Sorry too low');
        }
    }
}

// 7th question
function questionSeven() {
    var guessedHouse = prompt('Guess the houses that are a part of Hogwarts?');

    var hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Slytherin'];
    console.log('Full Array: ' + hogwartsHouses);

    if (guessedHouse === hogwartsHouses[0].toLowerCase() || hogwartsHouses[1].toLowerCase() || hogwartsHouses[2].toLowerCase()) {
        alert('Your answer is correct, all the Hogwarts houses are Gryffindor, Slytherin, and Hufflepuff');
        correctAnswer++;
    } else {
        alert('You guessed incorrectly, no all the Hogwarts houses are Gryffindor, Slytherin, and Hufflepuff');

        correctAnswer + ' out of ' + questions.length;
    }
}

questionSix();
questionSeven();
