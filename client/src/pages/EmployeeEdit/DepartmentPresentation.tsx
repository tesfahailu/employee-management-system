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
import { EditEmployeeDepartmentType } from '../../types/types';

export const DepartmentPresentation = ({
  title,
  onTitleChange,
  description,
  onDescriptionChange,
  isFormChanged,
  saveDescription,
}: EditEmployeeDepartmentType) => {
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
              {EditEmployeePageText.DEPARTMENT_TEXT}
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
            id="title"
            label="Title:"
            value={title}
            onChange={onTitleChange}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="description"
            label="Description:"
            value={description}
            onChange={onDescriptionChange}
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
