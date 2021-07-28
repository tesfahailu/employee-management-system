import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { CreateRolePageText } from '../../../text';
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

export const CreatePresentation = ({
  role: { id, name, description },
  onRoleChange,
  isFormComplete,
  saveChanges,
}: CreateRoleType) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container justifyContent="space-between">
        <Typography variant="h5" className={classes.header}>
          {CreateRolePageText.PageHeaderText}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          className={classes.actionButtonSpacing}
          disabled={!isFormComplete}
          onClick={saveChanges}
        >
          {CreateRolePageText.SaveButtonText}
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
