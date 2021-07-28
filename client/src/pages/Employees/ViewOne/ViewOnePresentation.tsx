import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React from 'react';
import { FormattedCard } from '../../../components/FormattedCard';
import { ViewEmployeePageText } from '../../../text';
import { EmployeeViewPresentationProp } from '../../../types/types';

const useStyles = makeStyles({
  textSpacingBelow: {
    marginBottom: '0.5REM',
  },
  actionButtonSpacing: {
    marginRight: '0.5REM',
    marginBottom: '0.5REM',
  },
});

export const ViewOnePresentation = ({
  employee,
  department,
  employeeAddress,
  officeAddress,
  projects,
}: EmployeeViewPresentationProp) => {
  const classes = useStyles();

  return (
    <>
      <Grid container justifyContent="space-between">
        <Typography variant="h5" className={classes.textSpacingBelow}>
          {ViewEmployeePageText.PageHeaderText}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          className={classes.actionButtonSpacing}
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
