import React from 'react';
import MaterialTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { getComparator, Order } from './TableUtils';
import { Rows } from '../../pages/Employees/ViewAll/testData';
import { ActionButtons } from '../../pages/Employees/ViewAll/ViewAllPresentation';

interface TableBody {
  rowsData: Array<Rows>;
  order: Order;
  orderBy: keyof Rows;
  page: number;
  rowsPerPage: number;
  selected: readonly number[];
  handleClick: (event: React.MouseEvent<HTMLDivElement>, id: number) => void;
  ActionButtons: React.FC<ActionButtons>;
}

export const TableBody: React.FC<TableBody> = ({
  rowsData,
  order,
  orderBy,
  page,
  rowsPerPage,
  selected,
  handleClick,
  ActionButtons,
}) => {
  const isSelected = (id: number) => selected.indexOf(id) !== -1;
  // Avoid a layout jump when reaching the last page with empty rows.

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsData.length) : 0;
  return (
    <MaterialTableBody>
      {rowsData
        .slice()
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.id);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event) => handleClick(event, row.id)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.id}
              selected={isItemSelected}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isItemSelected}
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </TableCell>
              <TableCell component="th" id={labelId} scope="row" padding="none">
                {row.lastName}
              </TableCell>
              <TableCell align="left">{row.firstName}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.mobile}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">{row.office}</TableCell>
              <TableCell align="left">{row.department}</TableCell>
              <TableCell
                align="left"
                sx={{
                  width: '150px',
                  pl: 0,
                }}
              >
                <ActionButtons rowId={row.id} />
              </TableCell>
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 53 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </MaterialTableBody>
  );
};
