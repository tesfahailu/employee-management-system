import { Grid, IconButton, Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { GridColDef, GridCellParams, DataGrid } from '@material-ui/data-grid';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { ViewRolesPageText } from '../../../text';
import {
  Add as AddIcon,
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { RoleType } from '../../../types/types';

const renderDetailsButton = (id: number | string) => {
  const history = useHistory();
  return (
    <Grid container justifyContent="center" wrap="nowrap">
      <Grid item xs>
        <IconButton
          color="primary"
          onClick={() => history.push(`/roles/viewOne/${id}`)}
        >
          <PageViewIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton
          color="primary"
          onClick={() => history.push(`/roles/edit/${id}`)}
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
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'description', headerName: 'Description', flex: 2 },
  {
    field: '',
    headerName: 'Actions',
    sortable: false,
    // disableClickEventBubbling: true,
    renderCell: (params: GridCellParams) => renderDetailsButton(params.id),
    width: 200,
  },
];

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

interface RolesProps {
  rowsData: RoleType[];
}

export const ViewAllPresentation: React.FC<RolesProps> = ({ rowsData }) => {
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
            {ViewRolesPageText.PageHeaderText}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            className={classes.actionButtonSpacing}
            startIcon={<AddIcon />}
            onClick={() => history.push('/roles/create')}
          >
            {ViewRolesPageText.CreateButtonText}
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
