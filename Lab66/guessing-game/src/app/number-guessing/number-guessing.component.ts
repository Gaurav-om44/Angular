import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-guessing',
  templateUrl: './number-guessing.component.html',
  styleUrls: ['./number-guessing.component.css']
})
export class NumberGuessingComponent implements OnInit {
  userGuess: number = 0;
  targetNumber: number = 0;
  message: string = '';

  ngOnInit() {
    this.resetGame();
  }

  resetGame() {
    this.targetNumber = Math.floor(Math.random() * 100) + 1;
    this.message = 'Guess a number between 1 and 100';
  }

  checkGuess() {
    if (this.userGuess < this.targetNumber) {
      this.message = 'Too low! Try again.';
    } else if (this.userGuess > this.targetNumber) {
      this.message = 'Too high! Try again.';
    } else {
      this.message = `Correct! The number was ${this.targetNumber}.`;
      this.resetGame();
    }
  }
}
