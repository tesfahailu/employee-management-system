import React, { Fragment } from 'react';
import {
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { Rows } from './testData';
import { ViewEmployeesPageText } from '../../../text';
import { useHistory } from 'react-router';

const renderDetailsButton = (id: number | string) => {
  const history = useHistory();
  return (
    <Grid container justify="center" wrap="nowrap">
      <Grid item xs>
        <IconButton
          color="primary"
          onClick={() => history.push(`/employees/viewOne/${id}`)}
        >
          <PageViewIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton
          color="primary"
          onClick={() => history.push(`/employees/edit/${id}`)}
        >
          <EditIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton color="primary">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const columns: GridColDef[] = [
  { field: 'lastName', headerName: 'Last name' },
  { field: 'firstName', headerName: 'First name' },
  { field: 'email', headerName: 'Email' },
  { field: 'mobile', headerName: 'Mobile' },
  { field: 'role', headerName: 'Role' },
  { field: 'office', headerName: 'Office' },
  { field: 'department', headerName: 'Department' },
  {
    field: '',
    headerName: 'Actions',
    sortable: false,
    disableClickEventBubbling: true,
    renderCell: (params: GridCellParams) => renderDetailsButton(params.id),
  },
];

const flexColumn = () => {
  return columns.map((column) => {
    const newObject = { ...column };
    return Object.defineProperty(newObject, 'flex', {
      value: 1,
      configurable: true,
      enumerable: true,
    });
  });
};

const fixedWidthColumn = () => {
  return columns.map((column) => {
    const newObject = { ...column };
    if (column.field !== '')
      return Object.defineProperty(newObject, 'width', {
        value: 120,
        configurable: true,
        enumerable: true,
      });
    else
      return Object.defineProperty(newObject, 'width', {
        value: 150,
        configurable: true,
        enumerable: true,
      });
  });
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginBottom: theme.spacing(2),
    },
    inheritHeight: {
      height: 'inherit',
      width: 'inherit',
    },
    fullParentContainer: {
      height: '100%',
      width: '100%',
    },
    card: {
      minHeight: '400px',
    },
  }),
);

interface ViewAllPresentationProp {
  rowsData: Rows[];
  isAboveMinWidth: boolean;
}

export const ViewAllPresentation: React.FC<ViewAllPresentationProp> = ({
  rowsData,
  isAboveMinWidth,
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid
        container
        justify="space-between"
        direction="column"
        className={classes.fullParentContainer}
      >
        <Typography variant="h5" className={classes.header}>
          {ViewEmployeesPageText.PageHeaderText}
        </Typography>
        <Grid item xs className={classes.inheritHeight}>
          <Grid
            container
            direction="column"
            className={classes.inheritHeight}
            wrap="nowrap"
          >
            <Grid item container xs wrap="nowrap">
              <Grid item xs>
                <DataGrid
                  key="data-grid"
                  rows={rowsData}
                  columns={isAboveMinWidth ? flexColumn() : fixedWidthColumn()}
                  autoPageSize
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};
