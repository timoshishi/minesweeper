export default class Board {
  constructor(boardSize) {
    this.board = null;
    this.boardSize = boardSize;
  }
  _createEmptyBoard() {
    const arr = new Array(this.boardSize).fill([]);
    this.board = arr.map((ar) => new Array(this.boardSize).fill(0));
  }

  _createBombPositions() {
    const bombPositions = [];
    while (bombPositions.length < this.boardSize) {
      const row = Math.floor(Math.random() * this.boardSize);
      const col = Math.floor(Math.random() * this.boardSize);
      const position = [row, col];
      if (this._isValidPosition(position, bombPositions)) {
        bombPositions.push(position);
      } else {
        continue;
      }
    }
    return bombPositions;
  }

  _isValidPosition(pos, positionsArr) {
    return positionsArr.reduce((isValid, item) => {
      if (JSON.stringify(pos) === JSON.stringify(item)) {
        return (isValid = false);
      } else {
        return isValid;
      }
    }, true);
  }
  _placeBombs(board, positions) {
    positions.forEach((pos) => {
      const [row, col] = pos;
      board[row][col] = 1;
    });
    return board;
  }

  createBoard() {
    this._createEmptyBoard(this.boardSize);
    const positions = this._createBombPositions();
    this._placeBombs(this.board, positions);
  }
}

const gameBoard = new Board(3);
gameBoard.createBoard();
console.log(gameBoard.board);
