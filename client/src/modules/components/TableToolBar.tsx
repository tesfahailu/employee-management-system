import React, { Dispatch, useState } from 'react';
import { IconButton, InputBase, Stack } from '@material-ui/core';
import { alpha, styled } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { Delete as DeleteIcon } from '@material-ui/icons';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { CSVLink } from 'react-csv';

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

function SearchBox({
  toggleSearchBox,
  searchText,
  handleSearch,
}: {
  toggleSearchBox: () => void;
  searchText: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <Search onBlur={toggleSearchBox}>
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
  );
}

interface TableToolBar<R> {
  selected: readonly number[];
  setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>;
  title: string;
  searchText: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowsData: R[];
  handleDeleteRows: (
    selected: readonly number[],
    setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>,
  ) => React.MouseEventHandler<HTMLButtonElement>;
}

export const TableToolBar = <R extends { id: number }>(
  props: TableToolBar<R>,
) => {
  const {
    selected,
    setSelected,
    title,
    searchText,
    handleSearch,
    rowsData,
    handleDeleteRows,
  } = props;
  const numSelected = selected.length;
  const [isSearch, setIsSearch] = useState(false);

  const toggleSearchBox = () => {
    setIsSearch((prevValue) => {
      return !prevValue;
    });
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
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={handleDeleteRows(selected, setSelected)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Stack direction="row" spacing={0.8} justifyContent="flex-start">
          {!isSearch && !searchText ? (
            <Tooltip title="Search">
              <IconButton onClick={toggleSearchBox}>
                <SearchIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <SearchBox
              toggleSearchBox={toggleSearchBox}
              searchText={searchText}
              handleSearch={handleSearch}
            />
          )}
          <CSVLink
            data={rowsData.map(({ id, ...rest }) => rest)}
            id="contained-button-csv"
            filename={`${title}.csv`}
          >
            <Tooltip title="Download CSV">
              <IconButton>
                <CloudDownloadIcon />
              </IconButton>
            </Tooltip>
          </CSVLink>
        </Stack>
      )}
    </Toolbar>
  );
};
