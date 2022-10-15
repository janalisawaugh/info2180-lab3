"use strict";
document.addEventListener("DOMContentLoaded", function(){

//variable declarations
const board = document.querySelector("#board");
const cells = board.querySelectorAll("div");//add board and cells
//cells. //Exercise 1
const status = document.querySelector("#status");
let controls = document.querySelector(".controls");
const restart = document.getElementById("button");
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
});

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