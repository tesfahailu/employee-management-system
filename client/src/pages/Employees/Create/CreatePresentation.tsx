import { Button, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { CreateEmployeePageText } from '../../../text';
import { CreateEmployeeType } from '../../../types/types';
import { CardDepartment } from '../../../modules/components/CardDepartment';
import { CardEmployeeAddress } from '../../../modules/components/CardEmployeeAddress';
import { CardEmployee } from '../../../modules/components/CardEmployee';
import { CardOffice } from '../../../modules/components/CardOffice';
import { CardProjects } from '../../../modules/components/CardProjects';
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
      <CardEmployee
        employee={employee}
        onEmployeeInfoChange={onEmployeeInfoChange}
      />
      <CardDepartment
        department={department}
        onDepartmentChange={onDepartmentChange}
      />
      <CardEmployeeAddress
        address={employeeAddress}
        onAddressChange={onEmployeeAddressChange}
      />
      <CardOffice
        address={officeAddress}
        onAddressChange={onOfficeAddressChange}
      />
      {/* <CardProjects projects={projects} onProjectChange={onProjectChange} /> */}
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
