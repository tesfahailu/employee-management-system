import { Grid, Typography, Button, Card, CardContent } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { addSpaceAndUpperCaseText } from '../../../modules/utils/textRegex';
import { ViewDepartmentPageText } from '../../../text';
import { DepartmentType } from '../../../types/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textSpacingBelow: {
      marginBottom: theme.spacing(0.5),
    },
    actionButtonSpacing: {
      marginRight: theme.spacing(0.5),
      marginBottom: theme.spacing(0.5),
    },
  }),
);

interface ViewOnePresentationProps {
  department: DepartmentType;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  department,
}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Fragment>
      <Grid container justifyContent="space-between">
        <Typography variant="h5" className={classes.textSpacingBelow}>
          {ViewDepartmentPageText.PageHeaderText}
        </Typography>
        <Button
          className={classes.actionButtonSpacing}
          onClick={() => history.push(`/departments/edit/${department.id}`)}
        >
          {ViewDepartmentPageText.EditButtonText}
        </Button>
      </Grid>
      <Card>
        <CardContent>
          {Object.keys(department).map((key) => {
            if (key === 'id') return;
            return (
              <CardRow
                index={addSpaceAndUpperCaseText(key)}
                value={department[key]}
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
