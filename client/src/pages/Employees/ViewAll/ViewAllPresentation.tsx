import React, { Fragment } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { Rows } from './testData';
import { ViewEmployeesPageText } from '../../../text';
import { useHistory } from 'react-router';
import Table from './Table';
import { PageHeader } from '../../../modules/components/PageHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginBottom: theme.spacing(2),
    },
    inheritHeight: {
      height: 'inherit',
      width: 'inherit',
    },
    fullParentContainer: {
      width: '100%',
    },
    card: {
      minHeight: '400px',
    },
  }),
);

interface ViewAllPresentationProp {
  rowsData: Rows[];
}

export const ViewAllPresentation: React.FC<ViewAllPresentationProp> = ({
  rowsData,
}) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container direction="column" className={classes.fullParentContainer}>
      <PageHeader
        title={ViewEmployeesPageText.PageHeaderText}
        subtitle={ViewEmployeesPageText.PageSubHeaderText}
        isButton={true}
        buttonText={ViewEmployeesPageText.CreateButtonText}
        buttonHref="/employees/create"
      />
      <Grid item xs className={classes.inheritHeight}>
        <Grid container direction="column" className={classes.inheritHeight}>
          <Grid item container xs>
            <Grid item xs>
              <Table rowsData={rowsData} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
