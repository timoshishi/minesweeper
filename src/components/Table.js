import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import styles from './Table.module.css';
const Table = ({ minesweeper }) => {
  console.log('minesweeper.visibleBoard', minesweeper.visibleBoard);
  return (
    <table>
      <tbody>
        {minesweeper.visibleBoard.map((row, i) => (
          <TableRow row={row} key={i} rowIdx={i} />
        ))}
      </tbody>
    </table>
  );
};
Table.propTypes = {
  minesweeper: PropTypes.object.isRequired,
};
export default Table;
