// TODO: write code here
import Game from './Game';

const board = document.querySelector('#board');
const images = document.querySelector('#goblin');
const game = new Game(board, images);

game.start();
