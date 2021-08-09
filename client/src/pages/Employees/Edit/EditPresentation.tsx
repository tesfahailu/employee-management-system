import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Select,
  Typography,
} from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import React, { Fragment } from 'react';
import { PageHeader } from '../../../modules/components/PageHeader';
import { EditEmployeePageText } from '../../../text';
import { EditEmployeeType } from '../../../types/types';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { FormEmployee } from '../../../modules/components/FormEmployee';

export const EditPresentation = ({
  employee,
  onEmployeeInfoChange,
  employeeAddress,
  onEmployeeAddressChange,
  office,
  onOfficeChange,
  officesList,
  department,
  onDepartmentChange,
  departmentsList,
  role,
  onRoleChange,
  rolesList,
  projects,
  onProjectChange,
  projectsList,
  isFormChanged,
  saveChanges,
}: EditEmployeeType) => {
  return (
    <Fragment>
      <PageHeader
        title={EditEmployeePageText.PageHeaderText}
        subtitle={EditEmployeePageText.PageSubHeaderText}
        isButton={false}
      />
      <Box sx={{ mt: 1 }}>
        <FormEmployee
          employee={employee}
          onEmployeeInfoChange={onEmployeeInfoChange}
        />
        <FormEmployeeAddress
          address={employeeAddress}
          onAddressChange={onEmployeeAddressChange}
        />
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">Company:</Typography>
            <Box sx={{ my: 2 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-office-native-simple">
                  Office:
                </InputLabel>
                <Select
                  native
                  value={office.name}
                  onChange={onOfficeChange('name')}
                  label="Office"
                  inputProps={{
                    name: 'office',
                    id: 'outlined-office-native-simple',
                  }}
                >
                  {officesList.map(({ name }) => (
                    <option value={name}>{name}</option>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ mb: 2 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-department-native-simple">
                  Department:
                </InputLabel>
                <Select
                  native
                  value={department.title}
                  onChange={onDepartmentChange('title')}
                  label="Department"
                  inputProps={{
                    name: 'department',
                    id: 'outlined-department-native-simple',
                  }}
                >
                  {departmentsList.map(({ name }) => (
                    <option value={name}>{name}</option>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ mb: 2 }}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-role-native-simple">
                  Role:
                </InputLabel>
                <Select
                  native
                  value={role.name}
                  onChange={onRoleChange('name')}
                  label="Role"
                  inputProps={{
                    name: 'role',
                    id: 'outlined-role-native-simple',
                  }}
                >
                  {rolesList.map(({ name }) => (
                    <option value={name}>{name}</option>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Box>
              <Typography variant="h6"> Projects:</Typography>
              <List dense={true}>
                <Divider />
                {projects.map(({ name, description }) => (
                  <Fragment>
                    <ListItem
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      }
                    >
                      <ListItemText
                        primary={name}
                        secondary={description ? description : null}
                      />
                    </ListItem>
                    <Divider />
                  </Fragment>
                ))}
              </List>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Button
        sx={{ ml: 1, mt: 1 }}
        disabled={!isFormChanged}
        onClick={saveChanges}
      >
        {EditEmployeePageText.SaveButtonText}
      </Button>
    </Fragment>
  );
};
