"use strict";
document.addEventListener("DOMContentLoaded", function(){

//variable declarations
const board = document.querySelector("#board");
const cells = board.querySelectorAll("div");//add board and cells
//cells. //Exercise 1
const status = document.querySelector("#status");
let controls = document.querySelector(".controls");
const restart = controls.querySelector(".btn");
let playerX = 'X';

let stateTracker = [];
let state = true;

//function for Exercise 2
cells.forEach(function(tile, index){
    tile.classList.add("square");//add css square class to cells
    //Exercise 2
    tile.addEventListener("click", function(e){
        if(state==true && tile.innerHTML==""){
            if (playerX == "X"){
                tile.classList.add("X");
            }
            else{
                tile.classList.add("O");
            }
            tile.innerHTML = playerX;
            stateTracker[index]= playerX;

            if (checkWin(index, playerX)==true){
                state = false;
                status.classList.add("you-won");
                status.innerHTML = `Congratulations! ${playerX} is the Winner!`
            }
            swap();

        
        }
    })



    //Exercise 3
    tile.addEventListener("mouseover",() =>{ 
        tile.style.cursor = "pointer";
        tile.classList.add("hover");
    })
    tile.addEventListener("mouseout", () =>{
        tile.classList.remove("hover");
    })
});//end of for each cell

function swap(){
    if (playerX == "X"){
        playerX = "O";
    }
    else if(playerX == "O"){
        playerX == "X";
    }
}


//Exercise 4
function checkWin(index, playerX){
    for (var i = 0; i<9; i++){
        if (winningPlays[i][0]==index && stateTracker[winningPlays[i][1]]==playerX && stateTracker[winningPlays[i][2]]==playerX){
            return true;
        }
    }
    return false;
}

const winningPlays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Exercise 5
restart.addEventListener("click", () =>{
    cells.forEach(tile => {
        tile.classList.remove("X");
        tile.classList.remove("O");
        tile.innerHTML = "";
    });
    stateTracker = [];
    status.classList.remove("you-won")
    status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    state = true;
    playerX = "X";

})

});//end