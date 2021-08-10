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
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import React, { Fragment } from 'react';
import { PageHeader } from '../../../modules/components/PageHeader';
import { EditEmployeePageText } from '../../../text';
import { EmployeePageEdit } from '../../../types/types';
import { FormEmployeeAddress } from '../../../modules/components/FormEmployeeAddress';
import { FormEmployee } from '../../../modules/components/FormEmployee';
import { DialogAddProject } from '../../../modules/components/DialogAddProjects';

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
  onProjectAdd,
  onProjectRemove,
  projectsList,
  isFormChanged,
  open,
  setOpen,
  saveChanges,
}: EmployeePageEdit) => {
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
                  Office Location:
                </InputLabel>
                <Select
                  native
                  value={office.name}
                  onChange={onOfficeChange('name')}
                  label="Office Location"
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
                  value={department.name}
                  onChange={onDepartmentChange('name')}
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
                {projects.map(({ id, name, description }) => (
                  <Fragment>
                    <ListItem
                      key={`${name}-${id}`}
                      secondaryAction={
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          component="div"
                          onClick={onProjectRemove(id!)}
                        >
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
              <Button
                variant="text"
                startIcon={<AddIcon />}
                onClick={() => setOpen(true)}
              >
                Add Project
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <DialogAddProject
        open={open}
        setOpen={setOpen}
        projectsList={projectsList}
        onProjectAdd={onProjectAdd}
      />
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
