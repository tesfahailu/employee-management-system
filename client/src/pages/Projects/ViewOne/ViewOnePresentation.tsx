import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { addSpaceAndUpperCaseText } from '../../../helper_functions/helperFunctions';
import { ViewProjectPageText } from '../../../text';
import { ProjectType } from '../../../types/types';
import { useHistory } from 'react-router';

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
  project: ProjectType;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  project,
}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Fragment>
      <Grid container justifyContent="space-between">
        <Typography variant="h5" className={classes.textSpacingBelow}>
          {ViewProjectPageText.PageHeaderText}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          className={classes.actionButtonSpacing}
          onClick={() => history.push(`/projects/edit/${project.id}`)}
        >
          {ViewProjectPageText.EditButtonText}
        </Button>
      </Grid>
      <Card>
        <CardContent>
          {Object.keys(project).map((key) => {
            if (key === 'id') return;
            return (
              <CardRow
                index={addSpaceAndUpperCaseText(key)}
                value={project[key]}
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
