import { Grid, Typography, Button, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { addSpaceAndUpperCaseText } from '../../../helper_functions/helperFunctions';
import { ViewRolePageText } from '../../../text';
import { RoleType } from '../../../types/types';

const useStyles = makeStyles({
  textSpacingBelow: {
    marginBottom: '0.5REM',
  },
  actionButtonSpacing: {
    marginRight: '0.5REM',
    marginBottom: '0.5REM',
  },
});

interface ViewOnePresentationProps {
  role: RoleType;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  role,
}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Fragment>
      <Grid container justifyContent="space-between">
        <Typography variant="h5" className={classes.textSpacingBelow}>
          {ViewRolePageText.PageHeaderText}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          className={classes.actionButtonSpacing}
          onClick={() => history.push(`/roles/edit/${role.id}`)}
        >
          {ViewRolePageText.EditButtonText}
        </Button>
      </Grid>
      <Card>
        <CardContent>
          {Object.keys(role).map((key) => {
            if (key === 'id') return;
            return (
              <CardRow
                index={addSpaceAndUpperCaseText(key)}
                value={role[key]}
              />
            );
          })}
        </CardContent>
      </Card>
    </Fragment>
  );
};

const CardRow = ({
  index: key,
  value,
}: {
  index: string;
  value: string | number | undefined;
}) => {
  const classes = useStyles();
  return (
    <div className={classes.textSpacingBelow}>
      <Typography variant="subtitle2" gutterBottom>
        {key}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {value}
      </Typography>
    </div>
  );
};
