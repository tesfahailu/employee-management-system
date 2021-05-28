import {
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
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

const renderDetailsButton = (id: number | string) => {
  const history = useHistory();
  return (
    <Grid container justify="center" wrap="nowrap">
      <Grid item xs>
        <IconButton
          color="primary"
          onClick={() => history.push(`/departments/viewOne/${id}`)}
        >
          <PageViewIcon />
        </IconButton>
      </Grid>
      <Grid item xs>
        <IconButton
          color="primary"
          onClick={() => history.push(`/departments/edit/${id}`)}
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
  { field: 'title', headerName: 'Title', flex: 1 },
  { field: 'description', headerName: 'Description', flex: 2 },
  {
    field: '',
    headerName: 'Actions',
    sortable: false,
    disableClickEventBubbling: true,
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
        justify="space-between"
        direction="column"
        className={classes.fullParentContainer}
      >
        <Grid container justify="space-between">
          <Typography variant="h5" className={classes.header}>
            {ViewDepartmentsPageText.PageHeaderText}
          </Typography>
          <Button
            color="primary"
            variant="contained"
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
