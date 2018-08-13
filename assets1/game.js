





 var loss = 0;
 var wins = 0;
 var guessesLeft = 9;
 

 var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

 document.onkeyup = function(event) {
  var userGuess = event.key;
  var computersLetter = letters[Math.floor(Math.random() * letters.length)];
  
     
     if (userGuess === computersLetter){
      wins++;} 
      else{ loss++;}

    
 
 


  
  var html =
       "<p>wins: " + wins + "</p>" +
       "<p>losses: " + loss + "</p>" +
       "<p>Guesses Left: " + guessesLeft + "</p>"+
       "<p>You chose: " + userGuess + "</p>";
   
     document.querySelector("#game").innerHTML = html;
 };

function newFunction(userGuesses) {
    for (var i= 0; i < guessesLeft; i--){
        


    };
}

 function clear (){

     
 }