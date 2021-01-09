import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import styles from './Table.module.css';
const Table = ({ minesweeper }) => {
  const board = minesweeper.board;
  const [visibleBoard, setVisibleBoard] = useState(
    minesweeper.createVisibleBoard()
  );

  const checkBoard = (row, col) => {
    console.log({ row, col });
  };

  return (
    <table>
      <tbody>
        {visibleBoard.map((row, i) => (
          <TableRow
            row={row}
            key={i}
            rowIdx={i}
            board={board}
            checkBoard={checkBoard}
          />
        ))}
      </tbody>
    </table>
  );
};
Table.propTypes = {
  minesweeper: PropTypes.object.isRequired,
};
export default Table;
