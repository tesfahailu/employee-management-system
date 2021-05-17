import { createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { FormattedCard } from '../../components/FormattedCard';
import { ViewEmployeePageText } from '../../text';
import { EmployeeViewPresentationProp } from '../../types/types';

const useStyles = makeStyles(() =>
  createStyles({
    textSpacingBelow: {
      marginBottom: '0.5REM',
    },
  }),
);

export const EmployeeViewPresentation = ({
  employee,
  department,
  employeeAddress,
  officeAddress,
  projects,
}: EmployeeViewPresentationProp) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h5" className={classes.textSpacingBelow}>
        {ViewEmployeePageText.PAGE_HEADER_TEXT}
      </Typography>
      <FormattedCard
        cardHeaderText={ViewEmployeePageText.EMPLOYEE_INFO_TEXT}
        cardHeaderActionButtonText={ViewEmployeePageText.EDIT_BUTTON_TEXT}
        onEditButtonClick={() => {}}
        cardContentData={employee}
      />
      <FormattedCard
        cardHeaderText={ViewEmployeePageText.DEPARTMENT_TEXT}
        cardHeaderActionButtonText={ViewEmployeePageText.EDIT_BUTTON_TEXT}
        onEditButtonClick={() => {}}
        cardContentData={department}
      />
      <FormattedCard
        cardHeaderText={ViewEmployeePageText.EMPLOYEE_ADDRESS_TEXT}
        cardHeaderActionButtonText={ViewEmployeePageText.EDIT_BUTTON_TEXT}
        onEditButtonClick={() => {}}
        cardContentData={employeeAddress}
      />
      <FormattedCard
        cardHeaderText={ViewEmployeePageText.OFFICE_ADDRESS_TEXT}
        cardHeaderActionButtonText={ViewEmployeePageText.EDIT_BUTTON_TEXT}
        onEditButtonClick={() => {}}
        cardContentData={officeAddress}
      />
      <FormattedCard
        cardHeaderText={ViewEmployeePageText.CURRENT_PROJECTS_TEXT}
        cardHeaderActionButtonText={ViewEmployeePageText.EDIT_BUTTON_TEXT}
        onEditButtonClick={() => {}}
        cardContentData={projects}
      />
    </>
  );
};
