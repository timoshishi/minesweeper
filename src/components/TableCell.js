import React from 'react';
import PropTypes from 'prop-types';

const TableCell = ({ cellVal, row, col, checkBoard }) => {
  return (
    <td onClick={() => checkBoard(row, col)}>{cellVal === 1 ? cellVal : ''}</td>
  );
};

TableCell.propTypes = {};

export default TableCell;
