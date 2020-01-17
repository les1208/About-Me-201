'use strict';

alert('Wizards Welcome (Muggles Tolerated!)');

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










