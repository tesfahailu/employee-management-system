import { Box } from '@material-ui/core';
import React, { Fragment } from 'react';
import { ViewEmployeePageText } from '../../../text';
import { EmployeeViewPresentationProp } from '../../../types/types';
import { CardFormatted } from '../../../modules/components/CardFormatted';
import { useHistory, useLocation } from 'react-router-dom';
import { PageHeader } from '../../../modules/components/PageHeader';

export const ViewOnePresentation = ({
  employee,
  department,
  employeeAddress,
  officeAddress,
  projects,
}: EmployeeViewPresentationProp) => {
  const location = useLocation();
  const splitPath = location.pathname.split('/');
  const id = splitPath[splitPath.length - 1];
  console.log('id', id);
  const history = useHistory();

  return (
    <Fragment>
      <PageHeader
        title={ViewEmployeePageText.PageHeaderText}
        subtitle={ViewEmployeePageText.PageSubHeaderText}
        isButton={false}
      />
      <Box sx={{ mt: 2 }}>
        <CardFormatted
          headerText={ViewEmployeePageText.EmployeeInfoText}
          buttonText={ViewEmployeePageText.EditButtonText}
          onEditButtonClick={() => {}}
          data={employee}
        />
        <CardFormatted
          headerText={ViewEmployeePageText.DepartmentText}
          buttonText={ViewEmployeePageText.EditButtonText}
          onEditButtonClick={() => {}}
          data={department}
        />
        <CardFormatted
          headerText={ViewEmployeePageText.EmployeeAddressText}
          buttonText={ViewEmployeePageText.EditButtonText}
          onEditButtonClick={() => {}}
          data={employeeAddress}
        />
        <CardFormatted
          headerText={ViewEmployeePageText.OfficeeAddressText}
          buttonText={ViewEmployeePageText.EditButtonText}
          onEditButtonClick={() => {}}
          data={officeAddress}
        />
        <CardFormatted
          headerText={ViewEmployeePageText.CurrrentProjectsText}
          buttonText={ViewEmployeePageText.EditButtonText}
          onEditButtonClick={() => {}}
          data={projects}
        />
      </Box>
    </Fragment>
  );
};
