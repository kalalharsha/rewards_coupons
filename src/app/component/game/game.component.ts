import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Minimax from 'tic-tac-toe-minimax';
const { GameStep } = Minimax;
@Component({
selector: 'app-game',
templateUrl: './game.component.html',
styleUrls: ['./game.component.css']
})
export class GameComponent {
public gameState: Array<number | string> = [0, 1, 2, 3, 4, 5, 6,
7, 8];
public winner: string | undefined;
public playing = false;
public computerFirst = false;
public difficulty: 'Easy'|'Normal'|'Hard' = 'Normal';
isLoggedin :any;
constructor( private _route: ActivatedRoute, private _router:
Router) {
}
ngOnInit(): void {
this.isLoggedin =
localStorage.getItem("is_loggedin")?.toString();
if(this.isLoggedin != "yes"){
this._router.navigateByUrl('/login');
}
}
public toggleGame(toggle: boolean): void {
if (toggle === this.playing) {
return;
}
this.gameState = [0, 1, 2, 3, 4, 5, 6, 7, 8];
this.winner = undefined;
if (toggle && this.computerFirst) {
this.makeComputerMove();
}
this.playing = toggle;
}
public makeHumanMove(field: number): void {
if (!this.playing || typeof this.gameState[field] !==
'number') {
return;
}
this.gameState[field] = 'X';
this.makeComputerMove();
}
private makeComputerMove(): void {
const symbols = {
huPlayer: 'X',
aiPlayer: 'O'
};
const winnerMapping: {[index: string]: any} = {
huPlayer: 'Human Wins!',
aiPlayer: 'Computer Wins!',
draw: 'It\'s a Draw!'
};
const result = GameStep(this.gameState, symbols,
this.difficulty);
this.gameState = result.board;
if (result.winner) {
this.winner = winnerMapping[result.winner];
this.playing = false;
}
}
}