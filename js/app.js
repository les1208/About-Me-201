'use strict';

alert('Wizards Welcome (Muggles Tolerated!)');
console.log('I am in app.js');

var welcomeMessage = prompt('Are you ready to guess who I am?');
if (welcomeMessage.toLowerCase() === 'yes') {
    alert('Great, lets get started!');
} else if (welcomeMessage.toLowerCase() === 'no') {
    alert('Error');
}

var aboutMe = prompt('Am I a female?');
if (aboutMe.toLowerCase() === 'yes') {
    alert('You are correct, five points for Slytherin!');
} else if (aboutMe.toLowerCase() === 'no') {
    alert('Try again');
}

var myHeight = prompt('Am I tall?');
if (myHeight.toLowerCase() === 'yes') {
    alert('Another five points for Slytherin');
} else if (myHeight.toLowerCase() === 'no') {
    alert('you lose 10 points')
}

var whatLanguage = prompt('Do I speak another language?');
if (whatLanguage.toLowerCase() === 'yes') {
    alert('More points for Slytherin');
} else if (whatLanguage.toLowerCase() === 'no') {
    alert('You are on a role losing points!')
}

var whatDoI  = prompt('Is spanish the language I speak?');
if (whatDoI.toLowerCase() === 'yes') {
    alert('Ding, ding, ding!');
} else if (whatLanguage1.toLowerCase() === 'no') {
    alert('Try again!');
}

// guessing game

var guessNumber = prompt('Guess the correct number. 1-10');

var answer= 6;

for (var i=0; i<4; i++) {
    var guess = parseInt(prompt('Whats your guess?'));
     if(guess === answer) {
        alert('Your answer was correct');
        break;
     } else if(guess > answer) {
        alert('Sorry too high'); 
     } else if(guess < answer) {
        alert('Sorry too low');
     }
}

// 7th question

var guessedHouse = prompt('Guess the houses that are a part of Hogwarts?');

var hogwartsHouses = ['Gryffindor', 'Hufflepuff', 'Slytherin'];
console.log('Full Array: ' + hogwartsHouses);

if(guessedHouse === hogwartsHouses[0].toLowerCase() || hogwartsHouses[1].toLowerCase() || hogwartsHouses[2].toLowerCase()) {
    alert('Your answer is correct, all the Hogwarts houses are Gryffindor, Slytherin, and Hufflepuff');    
} else {
    alert('You guessed incorrectly, no all the Hogwarts houses are Gryffindor, Slytherin, and Hufflepuff');
    
}
