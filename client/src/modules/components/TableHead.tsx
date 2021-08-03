import {
  TableHead as MaterialTableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
} from '@material-ui/core';
import { Box } from '@material-ui/system';
import { visuallyHidden } from '@material-ui/utils';
import React from 'react';
import { Order } from './TableUtils';
import { Rows } from './../../pages/Employees/ViewAll/testData';
import { HeadCell } from './../../pages/Employees/ViewAll/ViewAllPresentation';

interface TableHead {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Rows,
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string | number;
  rowCount: number;
  headCells: readonly HeadCell[];
}

export function TableHead(props: TableHead) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    headCells,
  } = props;
  const createSortHandler =
    (property: keyof Rows) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <MaterialTableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all employees',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => {
          return headCell.id !== 'action' ? (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ) : (
            <TableCell
              key="action"
              align="left"
              padding="none"
              sortDirection={false}
              sx={{ width: '150px' }}
            >
              {headCell.label}
            </TableCell>
          );
        })}
      </TableRow>
    </MaterialTableHead>
  );
}
