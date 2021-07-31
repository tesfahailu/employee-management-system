import React, { Fragment } from 'react';
import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { Rows } from './testData';
import { ViewEmployeesPageText } from '../../../text';
import { useHistory } from 'react-router';
import { Add as AddIcon } from '@material-ui/icons';
import BreadCrumb from '../../../modules/components/BreadCrumb';

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

const renderDetailsButton = (id: number | string) => {
  const history = useHistory();
  return (
    <Grid container justifyContent="center" wrap="nowrap">
      <Grid item xs>
        <IconButton
          onClick={() => history.push(`/employees/viewOne/${id}`)}
          size="large"
        >
          <PageViewIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton
          onClick={() => history.push(`/employees/edit/${id}`)}
          size="large"
        >
          <EditIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton size="large">
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
    // disableClickEventBubbling: true,
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

interface ViewAllPresentationProp {
  rowsData: Rows[];
  isAboveMinWidth: boolean;
}

export const ViewAllPresentation: React.FC<ViewAllPresentationProp> = ({
  rowsData,
  isAboveMinWidth,
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Fragment>
      <Grid
        container
        direction="column"
        className={classes.fullParentContainer}
      >
        <Grid item container direction="row" justifyContent="space-between">
          <Grid item>
            <Grid container direction="column">
              <Typography variant="h5">
                {ViewEmployeesPageText.PageHeaderText}
              </Typography>
              <Typography variant="subtitle2">
                {ViewEmployeesPageText.PageSubHeaderText}
              </Typography>
              <BreadCrumb />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              startIcon={<AddIcon />}
              onClick={() => history.push('/employees/create')}
            >
              {ViewEmployeesPageText.CreateButtonText}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs className={classes.inheritHeight}>
          <Grid container direction="column" className={classes.inheritHeight}>
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
