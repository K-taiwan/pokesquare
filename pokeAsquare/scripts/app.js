console.log('Welcome to Poke-A-Square...');

// == User Stories/game logic == //
// When the user clicks begin, the timer should start and the squares should populate with a random color

// When the user clicks on a color: the color should disapear and score should be added or subtracted.

// When the round is over, the scores round and timer should be updated for the user to start over with increased difficulty.

// Step One: Add a listener to the Begin and then start game logic

$('button').on('click', ()=> {
    console.log('game start');
    createSquares(10);
})

//----------Step 2-----------------
// Function needs to start timer and populate Random Squares of random colors
// grab square container
// given a number appends to div with a  class #square

const createSquares = (numberOfSquares) => {
    const $squares = $(".squares");
    for(let i = 0; i < numberOfSquares; i++){
        const $square = $('<div class="square"></div>');
        $square.css("background-color", applyRandomColor());
        $squares.append($square);
    }
};

// const createSquares = (numberOfSquares) => {
//     for(let i = 0; i < numberOfSquares; i++){
//         $('.squares').append(`<div></div>`);
        
//     }
// };
// createSquares(5);

//----------Step 3-----------------

// create a function that returns a random color from an array of colors

// const applyRandomColor = () => {
//     const colors = ["red", "green", "blue"];
//     const createColors = colors[(Math.floor(Math.random() * colors.length))];
//     return createColors;
// }
// console.log(applyRandomColor());

const applyRandomColor = () => {
    const colors = ["red", "green", "blue", "rebeccapurple", "black"];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
console.log(applyRandomColor());