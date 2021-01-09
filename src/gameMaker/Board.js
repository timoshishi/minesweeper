export default class Board {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.board = null;
    this.visibleBoard = null;
  }
  _createEmptyBoard() {
    const arr = new Array(this.boardSize).fill([]);
    const emptyBoard = arr.map((ar) => new Array(this.boardSize).fill(0));
    this.visibleBoard = emptyBoard.slice();
    this.board = emptyBoard.slice();
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

  _placeBombs(positions) {
    positions.forEach((pos) => {
      const [row, col] = pos;
      this.board[row][col] = 1;
    });
  }

  createBoard() {
    this._createEmptyBoard(this.boardSize);
    const positions = this._createBombPositions();
    this._placeBombs(positions);
  }

  createVisibleBoard() {
    const arr = new Array(this.boardSize).fill([]);
    return arr.map((ar) => new Array(this.boardSize).fill(0));
  }
}
