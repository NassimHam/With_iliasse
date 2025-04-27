// Javascript basics 

// alert(5);


// Debugging 
//console.log("Script linked");



// Les Variables 




// To remeber and do for the whole js 



var elementScore  = document.getElementById("score");



function roll() {
    var randomNumber = Math.floor(Math.random() * 6) + 1; // Generates a random integer between 1 and 6
    elementScore.textContent = randomNumber;
}


function reset(){
    elementScore.textContent = 0;
}

