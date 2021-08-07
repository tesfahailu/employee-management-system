import { Box, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React from 'react';
import { EditEmployeePageText } from '../../../text';
import { EditEmployeeType } from '../../../types/types';
import { FormDepartment } from '../../../modules/components/FormDepartment';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { FormEmployee } from '../../../modules/components/FormEmployee';
import { FormOffice } from '../../../modules/components/FormOffice';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormProjects } from '../../../modules/components/FormProjects';
import { Fragment } from 'react';

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

export const EditPresentation = ({
  employee,
  onEmployeeInfoChange,
  employeeAddress,
  onEmployeeAddressChange,
  department,
  onDepartmentChange,
  officeAddress,
  onOfficeAddressChange,
  projects,
  onProjectChange,
  isFormChanged,
  saveChanges,
}: EditEmployeeType) => {
  const classes = useStyles();
  return (
    <Fragment>
      <PageHeader
        title={EditEmployeePageText.PageHeaderText}
        subtitle={EditEmployeePageText.PageSubHeaderText}
        isButton={false}
      />
      <Box sx={{ mt: 2 }}>
        <FormEmployee
          employee={employee}
          onEmployeeInfoChange={onEmployeeInfoChange}
        />
        <FormEmployeeAddress
          address={employeeAddress}
          onAddressChange={onEmployeeAddressChange}
        />
        <FormDepartment
          department={department}
          onDepartmentChange={onDepartmentChange}
        />
        <FormOffice
          address={officeAddress}
          onAddressChange={onOfficeAddressChange}
        />
        {/* <FormProjects projects={projects} onProjectChange={onProjectChange} /> */}
      </Box>
      <Button
        className={classes.actionButtonSpacing}
        disabled={!isFormChanged}
        onClick={saveChanges}
      >
        {EditEmployeePageText.SaveButtonText}
      </Button>
    </Fragment>
  );
};
