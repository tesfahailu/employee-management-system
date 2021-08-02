import React, { Fragment } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import { Rows } from './testData';
import { ViewEmployeesPageText } from '../../../text';
import { useHistory } from 'react-router';
import { Add as AddIcon } from '@material-ui/icons';
import BreadCrumb from '../../../modules/components/BreadCrumb';
import Table from './Table';

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
    <Fragment>
      <Grid
        container
        direction="column"
        className={classes.fullParentContainer}
      >
        <Grid item container direction="row" justifyContent="space-between">
          <Grid item>
            <Grid container direction="column">
              <Typography variant="h5">
                {ViewEmployeesPageText.PageHeaderText}
              </Typography>
              <Typography variant="subtitle2">
                {ViewEmployeesPageText.PageSubHeaderText}
              </Typography>
              <BreadCrumb />
            </Grid>
          </Grid>
          <Grid item>
            <Button
              startIcon={<AddIcon />}
              onClick={() => history.push('/employees/create')}
            >
              {ViewEmployeesPageText.CreateButtonText}
            </Button>
          </Grid>
        </Grid>
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
    </Fragment>
  );
};
