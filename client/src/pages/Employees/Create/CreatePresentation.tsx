import { Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { CreateEmployeePageText } from '../../../text';
import { CreateEmployeeType } from '../../../types/types';
import { FormDepartment } from '../../../modules/components/FormDepartment';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { FormEmployee } from '../../../modules/components/FormEmployee';
import { FormOffice } from '../../../modules/components/FormOffice';
import { FormProjects } from '../../../modules/components/FormProjects';
import { PageHeader } from '../../../modules/components/PageHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginBottom: theme.spacing(2),
    },
    actionButtonSpacing: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

export const CreatePresentation: React.FC<CreateEmployeeType> = ({
  employee,
  onEmployeeInfoChange,
  department,
  onDepartmentChange,
  employeeAddress,
  onEmployeeAddressChange,
  officeAddress,
  onOfficeAddressChange,
  projects,
  onProjectChange,
  isFormComplete,
  saveChanges,
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <PageHeader
        title={CreateEmployeePageText.PageHeaderText}
        subtitle={CreateEmployeePageText.PageSubHeaderText}
        isButton={false}
      />
      <FormEmployee
        employee={employee}
        onEmployeeInfoChange={onEmployeeInfoChange}
      />
      <FormDepartment
        department={department}
        onDepartmentChange={onDepartmentChange}
      />
      <FormEmployeeAddress
        address={employeeAddress}
        onAddressChange={onEmployeeAddressChange}
      />
      <FormOffice
        address={officeAddress}
        onAddressChange={onOfficeAddressChange}
      />
      {/* <FormProjects projects={projects} onProjectChange={onProjectChange} /> */}
      <Button
        className={classes.actionButtonSpacing}
        disabled={!isFormComplete}
        onClick={saveChanges}
      >
        {CreateEmployeePageText.SaveButtonText}
      </Button>
    </Fragment>
  );
};
