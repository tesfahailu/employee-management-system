import {
  Button,
  Card,
  CardContent,
  CardHeader,
  createStyles,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { Fragment } from 'react';
import { EditEmployeePageText } from '../../text';
import { EditEmployeeInfoType } from '../../types/types';

export const EmployeeInfoPresentation = ({
  employee,
  onEmployeeInfoChange,
  isFormChanged,
  saveDescription,
}: EditEmployeeInfoType) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h5" className={classes.textSpacingBelow}>
        {EditEmployeePageText.PAGE_HEADER_TEXT}
      </Typography>
      <Card>
        <CardHeader
          title={
            <Typography variant="h6">
              {EditEmployeePageText.EMPLOYEE_INFO_TEXT}
            </Typography>
          }
          action={
            <Button
              color="primary"
              variant="outlined"
              onClick={saveDescription}
              disabled={!isFormChanged}
            >
              {EditEmployeePageText.SAVE_BUTTON_TEXT}
            </Button>
          }
        />
        <CardContent>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="firstName"
            label="First Name:"
            value={employee.firstName}
            onChange={onEmployeeInfoChange('firstName')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="lastName"
            label="Last Name:"
            value={employee.lastName}
            onChange={onEmployeeInfoChange('lastName')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="mobile"
            label="Mobile:"
            value={employee.mobile}
            onChange={onEmployeeInfoChange('mobile')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email:"
            value={employee.email}
            onChange={onEmployeeInfoChange('email')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="type"
            label="Type:"
            value={employee.type}
            onChange={onEmployeeInfoChange('type')}
            color="primary"
          />
        </CardContent>
      </Card>
    </Fragment>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    textSpacingBelow: {
      marginBottom: '1REM',
    },
  }),
);
