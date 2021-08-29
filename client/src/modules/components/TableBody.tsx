import React, { useState, SyntheticEvent } from 'react';
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
import { HandleDeleteRow, HeadCell } from '../../types/types';

interface ActionButton {
  rowId: number;
  actionButtonLinks: { view: string; edit: string };
  toggleIsDelete: (id: number) => void;
}

const ActionButtons = ({
  rowId,
  actionButtonLinks,
  toggleIsDelete,
}: ActionButton) => {
  const history = useHistory();
  return (
    <Stack direction="row" spacing={0.8} justifyContent="flex-start">
      <Tooltip title={TableBodyText.ViewIcon}>
        <IconButton
          onClick={() => history.push(`${actionButtonLinks.view}/${rowId}`)}
          size="large"
          sx={{ ml: -1.5 }}
        >
          <PageViewIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={TableBodyText.EditIcon}>
        <IconButton
          onClick={() => history.push(`${actionButtonLinks.edit}/${rowId}`)}
          size="large"
        >
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={TableBodyText.DeleteIcon}>
        <IconButton size="large" onClick={() => toggleIsDelete(rowId)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
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
  handleDeleteRow: HandleDeleteRow;
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
                    textToHighlight={
                      (row[headCells[0]['id'] as keyof R] as any) || ''
                    }
                  />
                </TableCell>
                {headCells
                  .filter(
                    (headCell, index) =>
                      index !== 0 && headCell['id'] !== 'actions',
                  )
                  .map((headCell, columnIndex) => (
                    <TableCell
                      align="left"
                      key={`${headCell['id']}-${columnIndex}`}
                    >
                      <Highlighter
                        searchWords={[searchText]}
                        autoEscape={true}
                        textToHighlight={
                          (row[headCell['id'] as keyof R] as any) || ''
                        }
                      />
                    </TableCell>
                  ))}
                <TableCell align="left" padding="normal" key={`actions-last`}>
                  <ActionButtons
                    rowId={row.id}
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
