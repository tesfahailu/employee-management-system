import {
  Button,
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { Fragment } from 'react';
import { CreateProjectPageText } from '../../../text';
import { CreateProjectType } from '../../../types/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginBottom: '1REM',
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
  project: { id, name, description },
  onProjectChange,
  isFormComplete,
  saveChanges,
}: CreateProjectType) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container justify="space-between">
        <Typography variant="h5" className={classes.header}>
          {CreateProjectPageText.PageHeaderText}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          className={classes.actionButtonSpacing}
          disabled={!isFormComplete}
          onClick={saveChanges}
        >
          {CreateProjectPageText.SaveButtonText}
        </Button>
      </Grid>
      <Card className={classes.card}>
        <CardContent>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            key={`${id}-name`}
            label="Name:"
            value={name}
            onChange={onProjectChange('name')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            key={`${id}-description`}
            label="Description:"
            value={description}
            onChange={onProjectChange('description')}
            color="primary"
          />
        </CardContent>
      </Card>
    </Fragment>
  );
};
