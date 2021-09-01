import React, { useState, SyntheticEvent, Fragment } from 'react';
import { getComparator, Order } from './TableUtils';
import {
  Alert,
  Snackbar,
  Typography,
  IconButton,
  Stack,
  TableBody as MaterialTableBody,
  TableCell,
  TableRow,
  Checkbox,
  Tooltip,
  TextField,
  Button,
} from '@material-ui/core';
import Highlighter from 'react-highlight-words';
import { useHistory } from 'react-router';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { DialogDeleteRow } from './DialogDeleteRow';
import { DialogDeleteRowText, TableBodyText } from '../../text';
import {
  HandleDeleteRow,
  HandleSelectRow,
  HeadCell,
  OnChangeSelect,
} from '../../types/types';

interface ActionButton<DataWithId> {
  row: DataWithId;
  actionButtonLinks: { view: string; edit: string };
  toggleIsDelete: (id: number) => void;
  isRowsEditable?: boolean;
  editableRow?: DataWithId;
  handleEditRow?: HandleSelectRow<DataWithId>;
  handleSaveRow?: HandleSelectRow<DataWithId>;
  handleCancelRow?: HandleSelectRow<DataWithId>;
}

function ActionButtons<DataWithId extends { id: number }>({
  row,
  actionButtonLinks,
  toggleIsDelete,
  isRowsEditable = false,
  editableRow,
  handleEditRow,
  handleSaveRow,
  handleCancelRow,
}: ActionButton<DataWithId>) {
  const history = useHistory();
  return (
    <Stack direction="row" spacing={0.8} justifyContent="flex-start">
      {!isRowsEditable ? (
        <Fragment>
          <Tooltip title={TableBodyText.ViewIcon}>
            <IconButton
              onClick={() =>
                history.push(`${actionButtonLinks.view}/${row.id}`)
              }
              size="large"
              sx={{ ml: -1.5 }}
            >
              <PageViewIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={TableBodyText.EditIcon}>
            <IconButton
              onClick={() =>
                history.push(`${actionButtonLinks.edit}/${row.id}`)
              }
              size="large"
            >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={TableBodyText.DeleteIcon}>
            <IconButton size="large" onClick={() => toggleIsDelete(row.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Fragment>
      ) : (
        <Fragment>
          {editableRow?.id === row.id ? (
            <Fragment>
              <Tooltip title={TableBodyText.SAVE}>
                <Button
                  variant="text"
                  onClick={(event) => handleSaveRow!(event, row)}
                  sx={{ ml: isRowsEditable ? -1.5 : '' }}
                >
                  {TableBodyText.SAVE}
                </Button>
              </Tooltip>
              <Tooltip title={TableBodyText.CANCEL}>
                <Button
                  variant="text"
                  color="secondary"
                  onClick={(event) => handleCancelRow!(event, row)}
                  sx={{ ml: isRowsEditable ? -1.5 : '' }}
                >
                  {TableBodyText.CANCEL}
                </Button>
              </Tooltip>
            </Fragment>
          ) : (
            <Fragment>
              <Tooltip title={TableBodyText.EditIcon}>
                <IconButton
                  onClick={(event) => handleEditRow!(event, row)}
                  size="large"
                  sx={{ ml: isRowsEditable ? -1.5 : '' }}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={TableBodyText.DeleteIcon}>
                <IconButton size="large" onClick={() => toggleIsDelete(row.id)}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Fragment>
          )}
        </Fragment>
      )}
    </Stack>
  );
}

interface VariableRowProp<DataWithId, Data> {
  searchText: string;
  row: DataWithId;
  editableRow?: DataWithId;
  selectedRowEdit?: number;
  onEditRowChange?: OnChangeSelect;
  headCells: HeadCell<DataWithId>[];
  errors?: Data;
  onErrorChange?: OnChangeSelect;
}

const VariableRow = <DataWithId extends { id: number }, Data>({
  searchText,
  row,
  editableRow,
  onEditRowChange,
  headCells,
  errors,
  onErrorChange,
}: VariableRowProp<DataWithId, Data>) => {
  if (editableRow?.id === row.id) {
    return (
      <Fragment>
        {headCells.map(({ id, disablePadding }, columnIndex) => {
          if (id === 'actions') return;
          return (
            <TableCell
              padding={disablePadding ? 'none' : 'normal'}
              align="left"
              key={`${id}-${columnIndex}`}
            >
              <TextField
                name={id! as string}
                margin="dense"
                fullWidth
                size="small"
                value={editableRow[id as keyof DataWithId]}
                onClick={(event) => event.stopPropagation()}
                onChange={onEditRowChange}
                multiline
                onBlur={onErrorChange}
                error={!!errors![id as keyof Data]}
                helperText={errors![id as keyof Data]}
              />
            </TableCell>
          );
        })}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {headCells
        .filter((headCell) => headCell['id'] !== 'actions')
        .map((headCell, columnIndex) => (
          <TableCell
            padding={headCell.disablePadding ? 'none' : 'normal'}
            align="left"
            key={`${headCell['id']}-${columnIndex}`}
          >
            <Highlighter
              searchWords={[searchText]}
              autoEscape={true}
              textToHighlight={
                (row[headCell['id'] as keyof DataWithId] as any) || ''
              }
            />
          </TableCell>
        ))}
    </Fragment>
  );
};

interface TableBody<DataWithId, Data> {
  actionButtonLinks: { view: string; edit: string };
  searchText: string;
  isRowsEditable?: boolean;
  rowsData: DataWithId[];
  editableRow?: DataWithId;
  onEditRowChange?: OnChangeSelect;
  errors?: Data;
  onErrorChange?: OnChangeSelect;
  handleEditRow?: HandleSelectRow<DataWithId>;
  handleSaveRow?: HandleSelectRow<DataWithId>;
  handleCancelRow?: HandleSelectRow<DataWithId>;
  handleDeleteRow: HandleDeleteRow;
  headCells: HeadCell<DataWithId>[];
  order: Order;
  orderBy: HeadCell<DataWithId>['id'];
  page: number;
  rowsPerPage: number;
  selected: readonly number[];
  handleClick: (event: React.MouseEvent<HTMLDivElement>, id: number) => void;
}

export const TableBody = <DataWithId extends { id: number }, Data>({
  actionButtonLinks,
  searchText,
  isRowsEditable,
  rowsData,
  editableRow,
  onEditRowChange,
  errors,
  onErrorChange,
  handleEditRow,
  handleSaveRow,
  handleCancelRow,
  handleDeleteRow,
  headCells,
  order,
  orderBy,
  page,
  rowsPerPage,
  selected,
  handleClick,
}: TableBody<DataWithId, Data>) => {
  const isSelected = (id: number) => selected.indexOf(id) !== -1;
  // Avoid a layout jump when reaching the last page with empty rows.
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteRowId, setDeleteRowId] = useState<number | null>(null);
  const [openSnackBar, setOpenSnackBar] = useState({
    open: false,
    success: false,
  });

  const handleClose = (event: SyntheticEvent<Element>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar((prevData) => ({ open: false, success: prevData.success }));
  };

  const toggleIsDelete = (id: number) => {
    setOpenDialog((prev) => !prev);
    setDeleteRowId(id);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsData.length) : 0;
  return (
    <MaterialTableBody>
      {rowsData.length === 0 ? (
        <TableRow
          sx={{
            height: 81,
          }}
        >
          <TableCell colSpan={headCells.length + 1}>
            <Typography>{TableBodyText.NoData}</Typography>
          </TableCell>
        </TableRow>
      ) : (
        rowsData
          .slice()
          .sort(getComparator(order, orderBy as string))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `enhanced-table-checkbox-${row.id}`;

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
                <VariableRow<DataWithId, Data>
                  searchText={searchText}
                  row={row}
                  editableRow={editableRow}
                  onEditRowChange={onEditRowChange}
                  headCells={headCells}
                  errors={errors}
                  onErrorChange={onErrorChange}
                />
                <TableCell align="left" padding="normal" key={`actions-last`}>
                  <ActionButtons<DataWithId>
                    row={row}
                    isRowsEditable={isRowsEditable}
                    editableRow={editableRow}
                    handleEditRow={handleEditRow}
                    handleSaveRow={handleSaveRow}
                    handleCancelRow={handleCancelRow}
                    actionButtonLinks={actionButtonLinks}
                    toggleIsDelete={toggleIsDelete}
                  />
                </TableCell>
              </TableRow>
            );
          })
      )}
      {emptyRows > 0 && (
        <TableRow
          sx={{
            height: 81 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
      <DialogDeleteRow
        open={openDialog}
        setOpen={setOpenDialog}
        setOpenSnackBar={setOpenSnackBar}
        rowId={deleteRowId}
        handleDeleteRow={handleDeleteRow}
      />
      <Snackbar
        open={openSnackBar.open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        {openSnackBar.success ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: '100%' }}
          >
            {DialogDeleteRowText.Success}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {DialogDeleteRowText.Error}
          </Alert>
        )}
      </Snackbar>
    </MaterialTableBody>
  );
};
