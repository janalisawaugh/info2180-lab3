//"use strict";
document.addEventListener("DOMContentLoaded", function(){

const board = document.querySelector("#board");
//console.log(board);
const cells = board.querySelectorAll("div");

const restart = document.getElementById("button");

cells.classList.add("square");
//console.log(board.cells);

/*const winningPlays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];*/
});