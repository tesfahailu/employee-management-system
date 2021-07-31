import { Button, Grid, IconButton, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { ViewDepartmentsPageText } from '../../../text';
import {
  Add as AddIcon,
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { DepartmentType } from '../../../types/types';

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

const renderDetailsButton = (id: number | string) => {
  const history = useHistory();
  return (
    <Grid container justifyContent="center" wrap="nowrap">
      <Grid item xs>
        <IconButton
          onClick={() => history.push(`/departments/viewOne/${id}`)}
          size="large"
        >
          <PageViewIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton
          onClick={() => history.push(`/departments/edit/${id}`)}
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
  { field: 'title', headerName: 'Title', flex: 1 },
  { field: 'description', headerName: 'Description', flex: 2 },
  {
    field: '',
    headerName: 'Actions',
    sortable: false,
    renderCell: (params: GridCellParams) => renderDetailsButton(params.id),
    width: 200,
  },
];

interface DepartmentProps {
  rowsData: DepartmentType[];
}

export const ViewAllPresentation: React.FC<DepartmentProps> = ({
  rowsData,
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
            {ViewDepartmentsPageText.PageHeaderText}
          </Typography>
          <Button
            className={classes.actionButtonSpacing}
            startIcon={<AddIcon />}
            onClick={() => history.push('/departments/create')}
          >
            {ViewDepartmentsPageText.CreateButtonText}
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
                  columns={columns}
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
