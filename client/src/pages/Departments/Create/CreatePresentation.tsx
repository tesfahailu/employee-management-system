import React, { Fragment } from 'react';
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { CreateDepartmentPageText } from '../../../text';
import { CreateDepartmentType } from '../../../types/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginBottom: theme.spacing(1),
    },
    header: {
      marginBottom: theme.spacing(2),
    },
    actionButtonSpacing: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

export const CreatePresentation = ({
  department: { id, title, description },
  onDepartmentChange,
  isFormComplete,
  saveChanges,
}: CreateDepartmentType) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container justifyContent="space-between">
        <Typography variant="h5" className={classes.header}>
          {CreateDepartmentPageText.PageHeaderText}
        </Typography>
        <Button
          className={classes.actionButtonSpacing}
          disabled={!isFormComplete}
          onClick={saveChanges}
        >
          {CreateDepartmentPageText.SaveButtonText}
        </Button>
      </Grid>
      <Card className={classes.card}>
        <CardContent>
          <TextField
            margin="normal"
            fullWidth
            key={`${id}-name`}
            label="Title:"
            value={title}
            onChange={onDepartmentChange('title')}
          />
          <TextField
            margin="normal"
            fullWidth
            key={`${id}-description`}
            label="Description:"
            value={description}
            onChange={onDepartmentChange('description')}
          />
        </CardContent>
      </Card>
    </Fragment>
  );
};
