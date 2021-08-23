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
import { HeadCell } from '../../types/types';
import { Order } from './TableUtils';

interface TableHead<R> {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: HeadCell<R>['id'],
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: HeadCell<R>['id'];
  rowCount: number;
  headCells: HeadCell<R>[];
}

export function TableHead<R extends object>(props: TableHead<R>) {
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
    (property: HeadCell<R>['id']) => (event: React.MouseEvent<unknown>) => {
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
        {headCells.map((headCell, index) => {
          return headCell.id !== 'action' ? (
            <TableCell
              sx={{ width: index === 0 ? '15%' : 'none' }}
              key={`key-${headCell.id}`}
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
              sx={{ minWidth: 80, px: 2 }}
            >
              {headCell.label}
            </TableCell>
          );
        })}
      </TableRow>
    </MaterialTableHead>
  );
}
