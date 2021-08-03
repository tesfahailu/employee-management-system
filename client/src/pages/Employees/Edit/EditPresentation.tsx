import { Box, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React from 'react';
import { EditEmployeePageText } from '../../../text';
import { EditEmployeeType } from '../../../types/types';
import { CardDepartment } from '../../../modules/components/CardDepartment';
import { CardEmployeeAddress } from '../../../modules/components/CardEmployeeAddress';
import { CardEmployee } from '../../../modules/components/CardEmployee';
import { CardOffice } from '../../../modules/components/CardOffice';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardProjects } from '../../../modules/components/CardProjects';
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
        <CardEmployee
          employee={employee}
          onEmployeeInfoChange={onEmployeeInfoChange}
        />
        <CardEmployeeAddress
          address={employeeAddress}
          onAddressChange={onEmployeeAddressChange}
        />
        <CardDepartment
          department={department}
          onDepartmentChange={onDepartmentChange}
        />
        <CardOffice
          address={officeAddress}
          onAddressChange={onOfficeAddressChange}
        />
        <CardProjects projects={projects} onProjectChange={onProjectChange} />
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
