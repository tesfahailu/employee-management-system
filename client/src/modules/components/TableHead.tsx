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

interface TableHead<DataWithId> {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: HeadCell<DataWithId>['id'],
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: HeadCell<DataWithId>['id'];
  rowCount: number;
  isRowsEditable?: boolean;
  headCells: HeadCell<DataWithId>[];
}

export function TableHead<DataWithId>({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  headCells,
  isRowsEditable = false,
}: TableHead<DataWithId>) {
  const createSortHandler =
    (property: HeadCell<DataWithId>['id']) =>
    (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  const actionCell = headCells.find((headCell) => headCell.id === 'actions');

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
        {headCells
          .filter((headCell) => headCell.id !== 'actions')
          .map((headCell, index) => (
            <TableCell
              sx={{
                width: index === 0 ? '20%' : 'none',
                minWidth: index === 0 ? 150 : 'none',
              }}
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
          ))}
        {actionCell && (
          <TableCell
            key="actions"
            align="left"
            padding="none"
            sortDirection={false}
            sx={{ width: isRowsEditable ? 120 : 180, px: 2 }}
          >
            {actionCell.label}
          </TableCell>
        )}
      </TableRow>
    </MaterialTableHead>
  );
}
