import * as React from 'react';
import MaterialTable from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import { TableToolBar } from './TableToolBar';
import { TableHead } from './TableHead';
import { Order } from './TableUtils';
import { TableBody } from './TableBody';
import { useEffect } from 'react';
import {
  HandleDeleteRow,
  HandleDeleteRows,
  HandleSelectRow,
  HeadCell,
  OnChangeSelect,
} from '../../types/types';

export interface Props<R> {
  actionButtonLinks: { view: string; edit: string };
  title: string;
  isRowsEditable?: boolean;
  rowsData: R[];
  editableRow?: R;
  onEditRow?: HandleSelectRow<R>;
  errors?: Omit<R, 'id'>;
  onErrorChange?: OnChangeSelect;
  handleSaveRow?: OnChangeSelect;
  handleCancelRow?: OnChangeSelect;
  handleDeleteRow: HandleDeleteRow;
  handleDeleteRows: HandleDeleteRows;
  headCells: HeadCell<R>[];
  minWidth: string;
}

export default function Table<R extends { id: number }>({
  actionButtonLinks,
  title,
  isRowsEditable,
  rowsData,
  editableRow,
  onEditRow,
  errors,
  onErrorChange,
  handleSaveRow,
  handleCancelRow,
  handleDeleteRow,
  handleDeleteRows,
  headCells,
  minWidth,
}: Props<R>) {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<HeadCell<R>['id']>('');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchText, setSearchText] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(rowsData);

  useEffect(() => {
    setFilteredData(
      rowsData.filter((el: any) => {
        for (const key of Object.keys(el)) {
          if (typeof el[key] === 'number' || el[key] === null) continue;
          if (
            (el[key] as string).toLowerCase().includes(searchText.toLowerCase())
          )
            return true;
        }
        return false;
      }),
    );
  }, [searchText, rowsData]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target!.value);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: HeadCell<R>['id'],
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      if (rowsData.length === 0) return;
      const newSelecteds = rowsData.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ mb: 2 }}>
      <TableToolBar<R>
        selected={selected}
        setSelected={setSelected}
        title={title}
        searchText={searchText}
        handleSearch={handleSearch}
        rowsData={rowsData}
        handleDeleteRows={handleDeleteRows}
      />
      <TableContainer>
        <MaterialTable
          sx={{ tableLayout: 'auto', overflowY: 'auto', width: '100%' }}
          aria-labelledby="tableTitle"
        >
          <TableHead<R>
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={filteredData.length}
            isRowsEditable={isRowsEditable}
            headCells={headCells}
          />
          <TableBody<R>
            actionButtonLinks={actionButtonLinks}
            searchText={searchText}
            isRowsEditable={true}
            rowsData={rowsData}
            editableRow={editableRow}
            onEditRow={onEditRow}
            errors={errors}
            onErrorChange={onErrorChange}
            handleSaveRow={handleSaveRow}
            handleCancelRow={handleCancelRow}
            handleDeleteRow={handleDeleteRow}
            headCells={headCells}
            order={order}
            orderBy={orderBy}
            page={page}
            rowsPerPage={rowsPerPage}
            selected={selected}
            handleClick={handleClick}
          />
        </MaterialTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
