import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { Rows } from './testData';

const renderDetailsButton = () => (
  <Grid container justify="center" wrap="nowrap">
    <Grid item xs>
      <IconButton color="primary">
        <PageViewIcon />
      </IconButton>
    </Grid>
    <Grid item xs>
      <IconButton color="primary">
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
    renderCell: renderDetailsButton,
  },
];

const mapColumn1 = () => {
  return columns.map((column) => {
    const newObject = { ...column };
    return Object.defineProperty(newObject, 'flex', {
      value: 1,
      configurable: true,
      enumerable: true,
    });
  });
};

const mapColumn2 = () => {
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

const useStyles = makeStyles(() =>
  createStyles({
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

interface EmployeesViewPresentationProp {
  rowsData: Rows[];
  isAboveMinWidth: boolean;
}

export const EmployeesViewPresentation: React.FC<EmployeesViewPresentationProp> = ({
  rowsData,
  isAboveMinWidth,
}) => {
  const classes = useStyles();

  return (
    <Card className={`${classes.inheritHeight} ${classes.card}`}>
      <Grid
        container
        direction="column"
        className={classes.inheritHeight}
        wrap="nowrap"
      >
        <CardHeader title={<Typography variant="h5">Employees:</Typography>} />
        <Grid item xs>
          <CardContent className={classes.fullParentContainer}>
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
                    columns={isAboveMinWidth ? mapColumn1() : mapColumn2()}
                    autoPageSize
                  />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    // <Fragment>
    //   <Card>
    //     <ul>
    //       {data.users.map((user) => (
    //         <li key={user.id}>
    //           {user.username}, {user.id}
    //         </li>
    //       ))}
    //     </ul>
    //   </Card>
    // </Fragment>
  );
};
