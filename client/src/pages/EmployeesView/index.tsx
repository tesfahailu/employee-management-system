import React from 'react';
import { useUsersQuery } from '../../generated/graphql';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';

import {
  Search as SearchIcon,
  Pageview as PageViewIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

interface EmployeesProps {
  isAboveMinWidth: boolean;
}

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

const rows = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
  },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 16, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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

export const EmployeesView: React.FC<EmployeesProps> = ({
  isAboveMinWidth,
}) => {
  const classes = useStyles();
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' });
  if (!data) return <div>...loading</div>;

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
                    rows={rows}
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
