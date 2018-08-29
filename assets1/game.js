





var loss = 0;
var wins = 0;
var guessesLeft;
var computersLetter;
var letterHistory = [];


var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

document.onkeyup = function (event) {
    var userGuess = event.key.toUpperCase();


    console.log(userGuess);
    console.log(computersLetter);

    if (userGuess === computersLetter) {
        wins++;
        reset();
    }
    else {
        guessesLeft--;
        letterHistory.push(userGuess);
    };

    if (guessesLeft === 0) {
        loss++;
        reset();
    }


    var html =
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + loss + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Guesses so far: " + letterHistory.join(', ') + "</p>";

    document.querySelector("#game").innerHTML = html;
};


function reset() {
    // reset computer guess
    computersLetter = letters[Math.floor(Math.random() * letters.length)];
    // reset number of guesses remaining
    guessesLeft = 9;
    // guess history
    letterHistory=[]
}

// main
reset()



