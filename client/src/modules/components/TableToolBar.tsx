import React, { Fragment, SyntheticEvent, useState } from 'react';
import {
  Alert,
  IconButton,
  InputBase,
  Snackbar,
  Stack,
  Toolbar,
  Typography,
  Tooltip,
} from '@material-ui/core';
import { alpha, styled } from '@material-ui/core/styles';
import {
  Search as SearchIcon,
  Delete as DeleteIcon,
  CloudDownload as CloudDownloadIcon,
} from '@material-ui/icons';
import { CSVLink } from 'react-csv';
import { DialogDeleteRows } from './DialogDeleteRows';
import { DialogDeleteRowsText, TableToolBarText } from '../../text';
import { HandleDeleteRows } from '../../types/types';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

interface TableToolBar<DataWithId> {
  selected: readonly number[];
  setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>;
  title: string;
  searchText: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowsData: DataWithId[];
  handleDeleteRows: HandleDeleteRows;
}

export const TableToolBar = <DataWithId extends { id: number }>({
  selected,
  setSelected,
  title,
  searchText,
  handleSearch,
  rowsData,
  handleDeleteRows,
}: TableToolBar<DataWithId>) => {
  const numSelected = selected.length;
  const [open, setOpen] = useState(false);
  const toggleIsDeleteAll = () => {
    setOpen((prev) => !prev);
  };

  const [openSnackBar, setOpenSnackBar] = useState<{
    open: boolean;
    success: boolean;
  }>({ open: false, success: false });

  const handleClose = (event: SyntheticEvent<Element>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackBar((prevData) => ({
      open: false,
      success: prevData.success,
    }));
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Fragment>
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} {TableToolBarText.Selected}
          </Typography>
          <Tooltip title="Delete">
            <IconButton onClick={toggleIsDeleteAll}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Fragment>
      ) : (
        <Fragment>
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {title}
          </Typography>
          <Stack direction="row" spacing={0.8} justifyContent="flex-start">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                autoFocus
                value={searchText}
                onChange={handleSearch}
              />
            </Search>
            <CSVLink
              data={rowsData.map(({ id, ...rest }) => rest)}
              id="contained-button-csv"
              filename={`${title}.csv`}
            >
              <Tooltip title={TableToolBarText.CSVLink}>
                <IconButton>
                  <CloudDownloadIcon />
                </IconButton>
              </Tooltip>
            </CSVLink>
          </Stack>
        </Fragment>
      )}
      <DialogDeleteRows
        open={open}
        setOpen={setOpen}
        setOpenSnackBar={setOpenSnackBar}
        handleDeleteRows={handleDeleteRows}
        selected={selected}
        setSelected={setSelected}
      />
      <Snackbar
        open={openSnackBar.open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={openSnackBar.success ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {openSnackBar.success
            ? DialogDeleteRowsText.Success
            : DialogDeleteRowsText.Error}
        </Alert>
      </Snackbar>
    </Toolbar>
  );
};
