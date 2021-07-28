import { Grid, IconButton, Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { GridColDef, GridCellParams, DataGrid } from '@material-ui/data-grid';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { ViewOfficesPageText } from '../../../text';
import { AddressType } from '../../../types/types';
import {
  Add as AddIcon,
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

const renderDetailsButton = (id: number | string) => {
  const history = useHistory();
  return (
    <Grid container justifyContent="center" wrap="nowrap">
      <Grid item xs>
        <IconButton
          color="primary"
          onClick={() => history.push(`/offices/viewOne/${id}`)}
        >
          <PageViewIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton
          color="primary"
          onClick={() => history.push(`/offices/edit/${id}`)}
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
  { field: 'streetAddress1', headerName: 'Street Address 1' },
  { field: 'streetAddress2', headerName: 'Street Address 2' },
  { field: 'city', headerName: 'City' },
  { field: 'state', headerName: 'State' },
  { field: 'country', headerName: 'Country' },
  { field: 'zipCode', headerName: 'Zip Code' },
  {
    field: '',
    headerName: 'Actions',
    sortable: false,
    // disableClickEventBubbling: true,
    renderCell: (params: GridCellParams) => renderDetailsButton(params.id),
    width: 200,
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
        value: 200,
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
    actionButtonSpacing: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

interface AddressProps {
  rowsData: AddressType[];
  isAboveMinWidth: boolean;
}

export const ViewAllPresentation: React.FC<AddressProps> = ({
  rowsData,
  isAboveMinWidth,
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Fragment>
      <Grid
        container
        justifyContent="space-between"
        direction="column"
        className={classes.fullParentContainer}
      >
        <Grid container justifyContent="space-between">
          <Typography variant="h5" className={classes.header}>
            {ViewOfficesPageText.PageHeaderText}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            className={classes.actionButtonSpacing}
            startIcon={<AddIcon />}
            onClick={() => history.push('/offices/create')}
          >
            {ViewOfficesPageText.CreateButtonText}
          </Button>
        </Grid>
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
