import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public gameState = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  public winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  public gameOver = false;
  public chance = "X";
  public draw = false;
  public winner = "";

  constructor() { }

  changeGameState(position: any) {
    // Check if game is already over
    if (this.gameOver) {
      alert('Game is already over!');
      return;
    }

    // Check if position is already occupied
    if (this.gameState[position] !== "") {
      alert('Position is already occupied!');
      return;
    }

    // Set the current player's symbol in the gameState
    this.gameState[position] = this.chance;

    // Check for a winner
    if (this.checkWinner()) {
      this.gameOver = true;
      this.winner = this.chance;
    }

    // Toggle the chance between "X" and "O"
    this.chance = this.chance === "X" ? "O" : "X";

    // Check for a draw
    if (!this.gameState.includes("")) {
      this.draw = true;
      this.gameOver = true;
    }
  }

  checkWinner() {
    for (let i = 0; i < this.winningPositions.length; i++) {
     // const [a, b, c] = this.winningPosition[i];
     let winningSubArray = this.winningPositions[i];

      if (
        // this.gameState[a] !== "" &&
        // this.gameState[a] === this.gameState[b] &&
        // this.gameState[a] === this.gameState[c]
      
        this.gameState[winningSubArray[0]] ===
        this.gameState[winningSubArray[1]] 
        
        &&
        this.gameState[winningSubArray[1]] ===
        this.gameState[winningSubArray[2]] 
        
        &&
        this.gameState[winningSubArray[0]] !== ""
        


      ) {
        return true;
      }
    }
    return false;
  }

  restartGame() {
    this.gameState = [
      "", "", "",
      "", "", "",
      "", "", ""
    ];
    this.gameOver = false;
    this.chance = "X";
    this.draw = false;
    this.winner = "";
  }
}
