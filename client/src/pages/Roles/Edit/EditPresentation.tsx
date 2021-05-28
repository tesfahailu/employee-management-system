import {
  makeStyles,
  Theme,
  createStyles,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
} from '@material-ui/core';
import React, { Fragment } from 'react';
import { EditRolePageText } from '../../../text';
import { CreateRoleType } from '../../../types/types';

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

export const EditPresentation = ({
  role: { id, name, description },
  onRoleChange,
  isFormComplete,
  saveChanges,
}: CreateRoleType) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container justify="space-between">
        <Typography variant="h5" className={classes.header}>
          {EditRolePageText.PageHeaderText}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          className={classes.actionButtonSpacing}
          disabled={!isFormComplete}
          onClick={saveChanges}
        >
          {EditRolePageText.SaveButtonText}
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
            onChange={onRoleChange('name')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            key={`${id}-description`}
            label="Description:"
            value={description}
            onChange={onRoleChange('description')}
            color="primary"
          />
        </CardContent>
      </Card>
    </Fragment>
  );
};
