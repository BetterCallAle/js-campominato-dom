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

    //create the squares with number inside the gridWrapper
    generateGrid(squareNumbers, userDifficulty);

})


//FUNCTIONS
//extract elements
function extractElements(elementId){
    const elementExtracted = document.getElementById(elementId);
    return elementExtracted
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