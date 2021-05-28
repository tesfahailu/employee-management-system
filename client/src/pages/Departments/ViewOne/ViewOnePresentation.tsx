import {
  makeStyles,
  createStyles,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from '@material-ui/core';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { addSpaceAndUpperCaseText } from '../../../helper_functions/helperFunctions';
import { ViewDepartmentPageText } from '../../../text';
import { DepartmentType } from '../../../types/types';

const useStyles = makeStyles(() =>
  createStyles({
    textSpacingBelow: {
      marginBottom: '0.5REM',
    },
    actionButtonSpacing: {
      marginRight: '0.5REM',
      marginBottom: '0.5REM',
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
      <Grid container justify="space-between">
        <Typography variant="h5" className={classes.textSpacingBelow}>
          {ViewDepartmentPageText.PageHeaderText}
        </Typography>
        <Button
          color="primary"
          variant="contained"
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