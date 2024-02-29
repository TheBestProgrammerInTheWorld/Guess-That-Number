const win = new Audio('a-win.mp3');
const bloop = new Audio('a-bloop.mp3');


// The contents in these objects decide what the style is going to be
let startGameStyles = {
    "margin-top": "0",
    "opacity": "0",
    "cursor": "default",
    "font-size": "24pt"
};
let titleSlideStyles = {
    "opacity": "1",
    "margin": "0"
};
let sliderSlideStyles = {
    "margin-top": "100px",
    "cursor": "pointer",
    "opacity": "1"
};
let selectedNumStyle = {
    "opacity": "1",
    "margin-top": "40px"
};
let guessButtonSlide = {
    "margin-top": "24px",
    "opacity": "1",
};

function gameStart(){
    //Sets random number to x
    x = parseInt(Math.random()*101);


    // Instantiates the animates on gameStart. Assigned to the START button.
    const startSlide = document.getElementById('buttonStart'); // Grabs the element to be animated
    Object.assign(startSlide.style, startGameStyles); // Assigns the styles from an object above to the element selected

    //I chose not to put all the variables together for organization
    //Instead I put the designated variable above the Object.assign

    const titleSlide = document.getElementById('title');
    Object.assign(titleSlide.style, titleSlideStyles);

    const gameSlide = document.getElementById('sliderContainer');
    Object.assign(gameSlide.style, sliderSlideStyles);

    const numSlide = document.getElementById('selectedNum');
    Object.assign(numSlide.style, selectedNumStyle);

    const buttonSlide = document.getElementById('containerForButton');
    Object.assign(buttonSlide.style, guessButtonSlide);


}

// This function activates when hitting the "Guess..." button
function guessNum(){    
    let guessedNum = parseInt(document.getElementById('mySlider').value); // Grabs the slider value

    // Increments the number of attempts by 1 before checking the number
    let attempts = parseInt(document.getElementById('score').innerHTML); // Parses the number present in the html element (0 at the start)
    attempts = attempts + 1 // +1 to the parsed element
    document.getElementById('score').innerHTML = attempts; // Sets element to new number
    
    // Notifies the player if they're guess is too high or low
    if (x > guessedNum){
        document.getElementById('attemptResult').innerHTML = "Too Low!" 
        bloop.cloneNode(true).play();
    } else if (x < guessedNum){
        document.getElementById('attemptResult').innerHTML = "Too High!"
        bloop.cloneNode(true).play();
    } else {
        win.cloneNode(true).play();

        document.getElementById('scoreCounter').innerHTML = "Score:" // Replaces the element content from "Attempts:" to "Score:"
        document.getElementById('attemptResult').innerHTML = "You Got It!" // Replaces the 'too high' or 'too low' to "You Got It"

        // Disables and grays out the guess button using the same object method above
        document.getElementById('guessbtn').disabled = true;
        let guessbtnWin = {
            "background": "rgb(90, 90, 90)",
            "border": "none",
            "cursor": "default"
        }
        let guessbtn = document.getElementById('guessbtn');
        Object.assign(guessbtn.style, guessbtnWin);

        // Displays and puts the "play again" button into view
        let paBtnStyle = {
            "display": "inline",
            "cursor": "pointer",
            "opacity": "1"
        }
        let paBtn = document.getElementById('playAgainBtn');
        Object.assign(paBtn.style, paBtnStyle);
    }
    
}

// Play again button
function playAgain(){
    x = parseInt(Math.random()*101); // Changes the secret number

    //Resets all the data
    document.getElementById('mySlider').value = 50;
    document.getElementById('selectedNum').innerHTML = 50;
    document.getElementById('guessbtn').disabled = false;
    document.getElementById('score').innerHTML = 0;


    // Visually re-enables the guess button
    let guessbtnWin = {
        "background": "black",
        "cursor": "pointer"
    }
    let guessbtn = document.getElementById('guessbtn');
    Object.assign(guessbtn.style, guessbtnWin);
    

    // Hides the play again button
    let paBtnStyle = {
        "display": "none",
        "cursor": "default",
        "opacity": "0",
    }
    let paBtn = document.getElementById('playAgainBtn');
    Object.assign(paBtn.style, paBtnStyle);
}