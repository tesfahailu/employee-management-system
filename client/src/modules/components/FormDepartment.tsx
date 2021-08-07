import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React from 'react';
import { EditEmployeePageText } from '../../text';
import { EditEmployeeDepartmentType } from '../../types/types';

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

export const FormDepartment = ({
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
      <CardContent>
        <Typography variant="subtitle1">
          {EditEmployeePageText.DepartmentText}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="outlined-title-native-simple">
              Title:
            </InputLabel>
            <Select
              native
              value={department.title}
              onChange={onDepartmentChange('title')}
              label="Title:"
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
            margin="normal"
            fullWidth
            id="description"
            label="Description:"
            value={department.description}
            onChange={onDepartmentChange('description')}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
