import React, { MouseEventHandler } from 'react';
import MaterialTableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { getComparator, Order } from './TableUtils';
import { HeadCell } from '../../pages/Employees/ViewAll/ViewAllPresentation';
import { Typography } from '@material-ui/core';
import Highlighter from 'react-highlight-words';
import { IconButton, Stack } from '@material-ui/core';
import { useHistory } from 'react-router';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

interface ActionButton {
  rowId: number;
  handleDeleteRow: (rowId: number) => MouseEventHandler<HTMLButtonElement>;
  actionButtonLinks: { view: string; edit: string };
}

const ActionButtons = ({
  rowId,
  handleDeleteRow,
  actionButtonLinks,
}: ActionButton) => {
  const history = useHistory();
  return (
    <Stack direction="row" spacing={0.8} justifyContent="flex-start">
      <IconButton
        onClick={() => history.push(`${actionButtonLinks.view}/${rowId}`)}
        size="large"
        sx={{ ml: -1.5 }}
      >
        <PageViewIcon />
      </IconButton>
      <IconButton
        onClick={() => history.push(`${actionButtonLinks.edit}/${rowId}`)}
        size="large"
      >
        <EditIcon />
      </IconButton>
      <IconButton size="large" onClick={handleDeleteRow(rowId)}>
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

interface TableBody<R> {
  actionButtonLinks: { view: string; edit: string };
  searchText: string;
  rowsData: Array<R>;
  headCells: HeadCell<R>[];
  order: Order;
  orderBy: HeadCell<R>['id'];
  page: number;
  rowsPerPage: number;
  selected: readonly number[];
  handleClick: (event: React.MouseEvent<HTMLDivElement>, id: number) => void;
  handleDeleteRow: (rowId: number) => MouseEventHandler<HTMLButtonElement>;
}

export const TableBody = <R extends { id: number }>({
  actionButtonLinks,
  searchText,
  rowsData,
  headCells,
  order,
  orderBy,
  page,
  rowsPerPage,
  selected,
  handleClick,
  handleDeleteRow,
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
        .map((row, rowIndex) => {
          const isItemSelected = isSelected(row.id);
          const labelId = `enhanced-table-checkbox-${rowIndex}`;

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
              {headCells.map((headCell, columnIndex) => {
                if (columnIndex === 0) {
                  return (
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      key="head-first"
                    >
                      <Highlighter
                        searchWords={[searchText]}
                        autoEscape={true}
                        textToHighlight={row[headCell['id'] as keyof R] as any}
                      />
                    </TableCell>
                  );
                }
                if (headCell['id'] === 'action') {
                  return (
                    <TableCell
                      align="left"
                      sx={{
                        pl: 0,
                        pr: 1,
                      }}
                      key={`action-last`}
                    >
                      <ActionButtons
                        rowId={row.id}
                        handleDeleteRow={handleDeleteRow}
                        actionButtonLinks={actionButtonLinks}
                      />
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell
                      align="left"
                      key={`${headCell['id']}-${columnIndex}`}
                    >
                      <Highlighter
                        searchWords={[searchText]}
                        autoEscape={true}
                        textToHighlight={row[headCell['id'] as keyof R] as any}
                      />
                    </TableCell>
                  );
                }
              })}
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow
          sx={{
            height: 81 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
      {rowsData.length === 0 && (
        <TableRow
          sx={{
            height: 81,
          }}
        >
          <TableCell colSpan={headCells.length + 1}>
            <Typography>No results found.</Typography>
          </TableCell>
        </TableRow>
      )}
    </MaterialTableBody>
  );
};
