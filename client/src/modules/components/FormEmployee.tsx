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
import { EditEmployeeInfoType } from '../../types/types';

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

export const FormEmployee = ({
  employee,
  onEmployeeInfoChange,
}: EditEmployeeInfoType) => {
  const classes = useStyles();
  const types = [
    { value: 'Permenant', text: 'Permenant' },
    { value: 'Contract', text: 'Contract' },
    { value: 'FullTime', text: 'Full Time' },
    { value: 'PartTime', text: 'Part Time' },
  ];
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="subtitle1">
          {EditEmployeePageText.EmployeeInfoText}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            fullWidth
            id="firstName"
            label="First Name:"
            value={employee!.firstName}
            onChange={onEmployeeInfoChange('firstName')}
          />
          <TextField
            margin="normal"
            fullWidth
            id="lastName"
            label="Last Name:"
            value={employee!.lastName}
            onChange={onEmployeeInfoChange('lastName')}
          />
          <TextField
            margin="normal"
            fullWidth
            id="mobile"
            label="Mobile:"
            value={employee!.mobile}
            onChange={onEmployeeInfoChange('mobile')}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email:"
            value={employee!.email}
            onChange={onEmployeeInfoChange('email')}
          />
          {employee.type && (
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel htmlFor="outlined-type-native-simple">
                Type:
              </InputLabel>
              <Select
                native
                value={employee.type}
                onChange={onEmployeeInfoChange('type')}
                label="Type"
                inputProps={{
                  name: 'type',
                  id: 'outlined-type-native-simple',
                }}
              >
                {types.map(({ value, text }) => (
                  <option value={value}>{text}</option>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
