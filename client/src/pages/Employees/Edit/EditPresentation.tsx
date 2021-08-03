import { Button, Grid, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { EditEmployeePageText } from '../../../text';
import { EditEmployeeType } from '../../../types/types';
import { CardDepartment } from '../../../modules/components/CardDepartment';
import { CardEmployeeAddress } from '../../../modules/components/CardEmployeeAddress';
import { CardEmployee } from '../../../modules/components/CardEmployee';
import { CardOffice } from '../../../modules/components/CardOffice';
import { CardProjects } from '../../../modules/components/CardProjects';

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
      <Grid container justifyContent="space-between">
        <Typography variant="h5" className={classes.header}>
          {EditEmployeePageText.PageHeaderText}
        </Typography>
        <Button
          className={classes.actionButtonSpacing}
          disabled={!isFormChanged}
          onClick={saveChanges}
        >
          {EditEmployeePageText.SaveButtonText}
        </Button>
      </Grid>
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
      <CardProjects projects={projects} onProjectChange={onProjectChange} />
    </Fragment>
  );
};
