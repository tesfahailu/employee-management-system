import { Button, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React from 'react';
import { ViewEmployeePageText } from '../../../text';
import { EmployeeViewPresentationProp } from '../../../types/types';
import { FormattedCard } from '../../../modules/components/FormattedCard';
import { useHistory, useLocation } from 'react-router-dom';

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

export const ViewOnePresentation = ({
  employee,
  department,
  employeeAddress,
  officeAddress,
  projects,
}: EmployeeViewPresentationProp) => {
  const classes = useStyles();
  const location = useLocation();
  const splitPath = location.pathname.split('/');
  const id = splitPath[splitPath.length - 1];
  console.log('id', id);
  const history = useHistory();

  return (
    <>
      <Grid container justifyContent="space-between">
        <Typography variant="h5" className={classes.textSpacingBelow}>
          {ViewEmployeePageText.PageHeaderText}
        </Typography>
        <Button
          className={classes.actionButtonSpacing}
          onClick={() => history.push(`/employees/viewOne/edit/${id}`)}
        >
          {ViewEmployeePageText.EditAllButtonText}
        </Button>
      </Grid>
      <FormattedCard
        cardHeaderText={ViewEmployeePageText.EmployeeInfoText}
        cardHeaderActionButtonText={ViewEmployeePageText.EditButtonText}
        onEditButtonClick={() => {}}
        cardContentData={employee}
      />
      <FormattedCard
        cardHeaderText={ViewEmployeePageText.DepartmentText}
        cardHeaderActionButtonText={ViewEmployeePageText.EditButtonText}
        onEditButtonClick={() => {}}
        cardContentData={department}
      />
      <FormattedCard
        cardHeaderText={ViewEmployeePageText.EmployeeAddressText}
        cardHeaderActionButtonText={ViewEmployeePageText.EditButtonText}
        onEditButtonClick={() => {}}
        cardContentData={employeeAddress}
      />
      <FormattedCard
        cardHeaderText={ViewEmployeePageText.OfficeeAddressText}
        cardHeaderActionButtonText={ViewEmployeePageText.EditButtonText}
        onEditButtonClick={() => {}}
        cardContentData={officeAddress}
      />
      <FormattedCard
        cardHeaderText={ViewEmployeePageText.CurrrentProjectsText}
        cardHeaderActionButtonText={ViewEmployeePageText.EditButtonText}
        onEditButtonClick={() => {}}
        cardContentData={projects}
      />
    </>
  );
};
