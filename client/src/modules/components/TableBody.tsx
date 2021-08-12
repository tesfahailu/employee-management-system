import React from 'react';
import MaterialTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { getComparator, Order } from './TableUtils';
import {
  ActionButton,
  HeadCell,
} from '../../pages/Employees/ViewAll/ViewAllPresentation';

interface TableBody<R> {
  headCells: HeadCell<R>[];
  rowsData: Array<R>;
  order: Order;
  orderBy: HeadCell<R>['id'];
  page: number;
  rowsPerPage: number;
  selected: readonly number[];
  handleClick: (event: React.MouseEvent<HTMLDivElement>, id: number) => void;
  ActionButtons: React.FC<ActionButton>;
}

export const TableBody = <R extends { id: number }>({
  rowsData,
  headCells,
  order,
  orderBy,
  page,
  rowsPerPage,
  selected,
  handleClick,
  ActionButtons,
}: TableBody<R>) => {
  const isSelected = (id: number) => selected.indexOf(id) !== -1;
  // Avoid a layout jump when reaching the last page with empty rows.

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsData.length) : 0;
  return (
    <MaterialTableBody>
      {rowsData
        .slice()
        .sort(getComparator(order, orderBy as string))
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
              <TableCell padding="checkbox" key="checkbox">
                <Checkbox
                  color="primary"
                  checked={isItemSelected}
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </TableCell>
              {headCells.map((headCell, index) => {
                if (index === 0) {
                  return (
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      key="head-first"
                    >
                      {row[headCell['id'] as keyof R]}
                    </TableCell>
                  );
                }
                if (headCell['id'] === 'action') {
                  return (
                    <TableCell
                      align="left"
                      sx={{
                        pl: 0,
                      }}
                      key={`action-last`}
                    >
                      <ActionButtons rowId={row.id} />
                    </TableCell>
                  );
                }
                return (
                  <TableCell align="left" key={`${headCell['id']}-${index}`}>
                    {row[headCell['id'] as keyof R]}
                  </TableCell>
                );
              })}
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
