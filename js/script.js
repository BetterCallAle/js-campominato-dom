//extracting the DOM elements
const playBtn = extractElements("play");
const gridWrapper = extractElements("grid");
const options = extractElements("difficulty")
//add event click to button
playBtn.addEventListener("click", function(){

    //clean the gridWrapper in case of multiple click on play
    gridWrapper.innerHTML = ""

    //export the user choice on select element
    const userChoice = options.value

    //add some condition for the game difficulty
    let squareNumbers = 100;
    let userDifficulty = "easy";

    if (userChoice === "medium"){
        squareNumbers = 81;
        userDifficulty = "medium";
    } else if (userChoice === "hard"){
        squareNumbers = 49;
        userDifficulty = "hard";
    }

    //create bombs
    const bombs = giveAnArrayWithRndNum(squareNumbers)
    console.log(bombs);
    //create the element for the message win/lose
    const Message = document.createElement("h2")
    //set the score
    let score = 0 
    //create the squares with number inside the gridWrapper
    for (let i = 1; i <= squareNumbers; i++) {
        
        //create square elements
        const square = createElement("square");
        //give an id for each element
        square.setAttribute("id", i)
        //add the number inside
        square.innerHTML = i
        //add the difficulty class
        square.classList.add(userDifficulty)
        //on click add the "active" class 
        square.addEventListener("click", function(){
            if(bombs.includes(parseInt(this.innerHTML))){
                //add the bomb class to everyElement with the bomb number
               for (let j = 0; j < bombs.length; j++) {
                const thisIndex = bombs[j];
                const element = document.getElementById(thisIndex)
                element.classList.add("bomb")
               }
               //create the "you lose" message
               Message.innerHTML = `Mi dispiace! hai perso. Il tuo punteggio è ${score}`
               Message.classList.add("result-message")
               gridWrapper.append(Message)

            } else if (score === squareNumbers - bombs.length){
                //create the "you win" message
               Message.innerHTML = `Complimenti! hai vinto!. Il tuo punteggio è ${score}`
               Message.classList.add("result-message")
               gridWrapper.append(Message)
            } else {
                this.classList.add("active")
                score++
            }

            console.log(score)
        })
        //stamp on the gridWrapper element
        gridWrapper.append(square)
    }

})

//FUNCTIONS
//extract elements
function extractElements(elementId){
    const elementExtracted = document.getElementById(elementId);
    return elementExtracted
}

//genearate a random number
function getARandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//generate an array with 16 random number (not duplicated)
function giveAnArrayWithRndNum(numbersOfSquares){
    
    const randomArray = [];

    //create a while cycle for pushing 16 numbers in the array
    while (randomArray.length < 16) {
        const randomNumber = getARandomNumber(1, numbersOfSquares)

        //check if there are not duplicates
        if(!randomArray.includes(randomNumber)){
            randomArray.push(randomNumber)
        }
    }

    return randomArray
}

//UI FUNCTIONS
//create a "square" element
function createElement(className) {
    const elementCreated = document.createElement("div")
    elementCreated.classList.add(className)
    return elementCreated
}

function generateGrid(numbersOfSquare, difficulty) {
     //create 100 div with class "square" and number inside them
     for (let i = 1; i <= numbersOfSquare; i++) {
        
        //create square elements
        const square = createElement("square");
        //add the number inside
        square.innerHTML = i
        //add the difficulty class
        square.classList.add(difficulty)
        //on click add the "active" class 
        square.addEventListener("click", addActiveClass)
        //stamp on the gridWrapper element
        gridWrapper.append(square)
    }
}

//add the class active on click for the grid elements
function addActiveClass(){
    this.classList.toggle("active")
    console.log(this.innerHTML);
}