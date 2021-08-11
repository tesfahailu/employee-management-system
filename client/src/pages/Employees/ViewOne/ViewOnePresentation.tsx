import { Box } from '@material-ui/core';
import React, { Fragment } from 'react';
import { EmployeeViewPageText } from '../../../text';
import { EmployeePageView } from '../../../types/types';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';
import { PageHeader } from '../../../modules/components/PageHeader';

export const ViewOnePresentation = ({
  employee,
  department,
  employeeAddress,
  officeAddress,
  projects,
}: EmployeePageView) => (
  <Fragment>
    <PageHeader
      title={EmployeeViewPageText.PageHeader}
      subtitle={EmployeeViewPageText.PageSubHeader}
      isButton={false}
    />
    <Box sx={{ mt: 2 }}>
      <CardStyledDisplay
        headerText={EmployeeViewPageText.EmployeeInfo}
        buttonText={EmployeeViewPageText.ButtonEdit}
        onEditButtonClick={() => {}}
        data={employee}
      />
      <CardStyledDisplay
        headerText={EmployeeViewPageText.Department}
        buttonText={EmployeeViewPageText.ButtonEdit}
        onEditButtonClick={() => {}}
        data={department}
      />
      <CardStyledDisplay
        headerText={EmployeeViewPageText.EmployeeAddress}
        buttonText={EmployeeViewPageText.ButtonEdit}
        onEditButtonClick={() => {}}
        data={employeeAddress}
      />
      <CardStyledDisplay
        headerText={EmployeeViewPageText.OfficeeAddress}
        buttonText={EmployeeViewPageText.ButtonEdit}
        onEditButtonClick={() => {}}
        data={officeAddress}
      />
      <CardStyledDisplay
        headerText={EmployeeViewPageText.CurrentProjects}
        buttonText={EmployeeViewPageText.ButtonEdit}
        onEditButtonClick={() => {}}
        data={projects}
      />
    </Box>
  </Fragment>
);
