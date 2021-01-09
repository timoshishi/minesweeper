import React from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell';
const TableRow = ({ row, rowIdx }) => {
  return (
    <tr>
      {row.map((cellVal, i) => (
        <TableCell cellVal={cellVal} key={`${rowIdx}_${i}`} />
      ))}
    </tr>
  );
};

TableRow.propTypes = {
  row: PropTypes.array.isRequired,
};

export default TableRow;
