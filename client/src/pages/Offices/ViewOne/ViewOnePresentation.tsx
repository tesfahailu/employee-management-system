import { Grid, Typography, Button, Card, CardContent } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router';
import { addSpaceAndUpperCaseText } from '../../../modules/utils/textRegex';
import { ViewOfficePageText } from '../../../text';
import { AddressType } from '../../../types/types';

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
  office: AddressType;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  office,
}) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Fragment>
      <Grid container justifyContent="space-between">
        <Typography variant="h5" className={classes.textSpacingBelow}>
          {ViewOfficePageText.PageHeaderText}
        </Typography>
        <Button
          className={classes.actionButtonSpacing}
          onClick={() => history.push(`/offices/edit/${office.id}`)}
        >
          {ViewOfficePageText.EditButtonText}
        </Button>
      </Grid>
      <Card>
        <CardContent>
          {(Object.keys(office) as [keyof AddressType]).map((key) => {
            if (key === 'id') return;
            return (
              <CardRow
                index={addSpaceAndUpperCaseText(key)}
                value={office[key]!}
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
