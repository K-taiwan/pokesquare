//////NOTE  TEACHER SOLUTION***************************************************************************************
console.log('Welcome to Poke-a-Square...');
// Test comment to show updating in repo

// == User Stories/game logic == //
// When the user clicks begin, the timer should start and the squares should populate with a random color

// When the user clicks on a color: the color should disapear and score should be added or subtracted.

// When the round is over, the scores round and timer should be updated for the user to start over with increased difficulty.

// Step one Add a listener to the Begin button and then start game logic

$("button").on("click", ()=>{
  console.log("Game Start");
  setUpRound();
  setTimer();
});

// Step 2
// Define Function
// grab the squares container
// create a loop that runs to the number of squares given
// for each loop create a square
// add the square class to it
// append the square to squares container

const createSquares = numberOfSquares => {
  const $squares = $(".squares");
  for(let i=0; i<numberOfSquares; i++){
    const $square = $('<div class="square"/>');
    $square.css("background-color", applyRandomColor());
    $squares.append($square);
  }
};

// Step three
// create a function that returns a random color from an array of colors

const applyRandomColor = () => {
  const colors = ["red","green","blue", "purple"];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

// Step 4
// Add an event listener to square **event delegation** look at the event target and console.log( event target background color)

$(".squares").on("click",".square", (event) => {
  handlePoke(event);
});

// create a variable called score and set it to zero
// in handlePoke() lets grab the color of the current square and save it to a variable
// Create a new function called checkValidPoke that takes in the square color
// call that function inside of handlePoke()

let score = 0;

// check if square has been poked
// if not then we will add poked to the square and change opacity
// run checkValidPoke with color from the event target
const handlePoke = event => {
  if(event.target.classList.contains("poked") === false){
    const color = $(event.target).css("background-color");
    $(event.target).addClass("poked").css("opacity",.3);
    checkValidPoke(color);
  }
};


// check if color is blue. if so then we will add to score otherwise substract from score
const checkValidPoke = squareColor => {
  const colors = squareColor.substring(4,squareColor.length -1).split(", ");
  const blueValue = parseInt(colors[2]);
  // check if blue === 255 if so add to score otherwise lower score
  if(blueValue === 255){
    score++;
    $('h1').text(`Scoreboard: ${score}`);
  } else {
    score--;
    $('h1').text(`Scoreboard: ${score}`);
  }
};

// Step 5 Set a timer. Set a round. Increase Difficulty.

let time = 30;
let round = 1;

const setTimer = () => {
  const timer = setInterval(()=>{
    console.log(time);
    time--;
    if(time === 0){
      clearInterval(timer);
      round++;
      setUpRound();
      setTimer();
    }
    updateTime();
  }, 1000)
}

const updateTime = () => {
  const $timer = $("#timer");
  $timer.text(`timer: ${time}s`);
}

const setUpRound = () => {
  $(".squares").empty();
  $("#round").text(`round: ${round}`);

  if(round === 1){
    createSquares(50);
    time = 30;
  } else if (round === 2){
    createSquares(100);
    time = 20;
  } else {
    createSquares(150);
    time = 10;
  }
}







//////NOTE  TEACHER SOLUTION***************************************************************************************



/* console.log('Welcome to Poke-a-Square...');
// Test comment to show updating in repo

// == User Stories/game logic == //
// When the user clicks begin, the timer should start and the squares should populate with a random color

// When the user clicks on a color: the color should disapear and score should be added or subtracted.

// When the round is over, the scores round and timer should be updated for the user to start over with increased difficulty.

// Step one Add a listener to the Begin button and then start game logic

$("button").on("click", ()=>{
  console.log("Game Start");
  setUpRound();
  setTimer();

});

// Step 2
// Define Function
// grab the squares container
// create a loop that runs to the number of squares given
// for each loop create a square
// add the square class to it
// append the square to squares container

const createSquares = numberOfSquares => {
  const $squares = $(".squares");
  for(let i=0; i<numberOfSquares; i++){
    const $square = $('<div class="square"/>');
    $square.css("background-color", applyRandomColor());
    $squares.append($square);
  }
};

// Step three
// create a function that returns a random color from an array of colors

const applyRandomColor = () => {
  const colors = ["red","green","blue", "purple"];
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};

// Step 4
// Add an event listener to square **event delegation** look at the event target and console.log( event target background color)

$(".squares").on("click",".square", (event) => {
  handlePoke(event);
});

// create a variable called score and set it to zero
// in handlePoke() lets grab the color of the current square and save it to a variable
// Create a new function called checkValidPoke that takes in the square color
// call that function inside of handlePoke()

let score = 0;

// check if square has been poked
// if not then we will add poked to the square and change opacity
// run checkValidPoke with color from the event target
const handlePoke = event => {
  if(event.target.classList.contains("poked") === false){
    const color = $(event.target).css("background-color");
    $(event.target).addClass("poked").css("opacity",.3);
    checkValidPoke(color);
  }
};


// check if color is blue. if so then we will add to score otherwise substract from score
const checkValidPoke = squareColor => {
    const colors = squareColor.substring(4,squareColor.length - 1).split(", ");
    const blueValue = parseInt(colors[2]);
    console.log(blueValue);
    //check if blue is equal to 255. if so, add the score, else ---- lower the score
    if( blueValue === 255 ){
        score += 1;
        $('h1').text(`Scoreboard: ${score}`);
    } else{
        score -= 1;
        $('h1').text(`Scoreboard: ${score}`);
    }
    
};


//Step 5 NOTE set timer and set a round increase difficulty

let time = 30;
let round = 1;
const setTimer = () => {
    
    const timer = setInterval(()=> {
        // console.log(time);
        time--;
        if(time === 0){
            clearInterval(timer);
            round++;
            setUpRound();
            setTimer();
        }
        updateTime();
    }, 1000);
}

const updateTime = () => {
    const $timer = $('#timer');
    $timer.text(`timer: ${time}s`);
}

const setUpRound = () => {
    $(".squares").empty();
    $("#round").text(`Round ${round}`);
    if(round === 1){
        createSquares(50);
        time = 30;
    } else if(round === 2){
        createSquares(100);
        time = 26;
    } else{
        createSquares(150);
        time = 10;
    }
}
 */