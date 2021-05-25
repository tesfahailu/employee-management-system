import {
  Card,
  CardContent,
  CardHeader,
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  Select,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { EditEmployeePageText } from '../../../../text';
import { EditEmployeeDepartmentType } from '../../../../types/types';

export const DepartmentCard = ({
  department,
  onDepartmentChange,
}: EditEmployeeDepartmentType) => {
  const classes = useStyles();
  const departmentTitle = [
    { value: 'Marketing', text: 'Marketing' },
    { value: 'Operations', text: 'Operations' },
    { value: 'Finance', text: 'Finance' },
    { value: 'Sales', text: 'Sales' },
    { value: 'HumanResources', text: 'Human Resources' },
    { value: 'Product', text: 'Product' },
  ];
  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h6">
            {EditEmployeePageText.DepartmentText}
          </Typography>
        }
      />
      <CardContent>
        <FormControl
          variant="outlined"
          className={classes.formControl}
          fullWidth
        >
          <InputLabel htmlFor="outlined-title-native-simple">Title:</InputLabel>
          <Select
            native
            value={department.title}
            onChange={onDepartmentChange('title')}
            label="Title"
            inputProps={{
              name: 'type',
              id: 'outlined-title-native-simple',
            }}
          >
            {departmentTitle.map(({ value, text }) => (
              <option value={value}>{text}</option>
            ))}
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="description"
          label="Description:"
          value={department.description}
          onChange={onDepartmentChange('description')}
          color="primary"
        />
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginBottom: theme.spacing(2),
    },
    formControl: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  }),
);
