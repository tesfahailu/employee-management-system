import { SelectChangeEvent } from '@material-ui/core';
import { ChangeEvent, MouseEvent } from 'react';

export interface EmployeeType {
  id?: number;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  type?: string;
}

export interface DepartmentType {
  id?: number;
  title: string;
  description: string;
}

export interface AddressType {
  id: number;
  streetAddress1: string;
  streetAddress2: string | null;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface CreateAddressType {
  streetAddress1: string;
  streetAddress2: string | null;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface ProjectType {
  id: number;
  name: string;
  description: string;
}

export interface LimitedProjectType {
  name: string;
  description: string;
}

export interface RoleType {
  id: number;
  name: string;
  description: string | null;
}

export interface LimitedRoleType {
  name: string;
  description: string | null;
}

export type EmployeeFieldType =
  | 'firstName'
  | 'lastName'
  | 'mobile'
  | 'email'
  | 'type';

export type DepartmentFieldType = 'title' | 'description';

export type AddressFieldType =
  | 'streetAddress1'
  | 'streetAddress2'
  | 'city'
  | 'state'
  | 'country'
  | 'zipCode';

export type OfficeFieldType = 'name' | 'description';
export type ProjectFieldType = 'name' | 'description';
export type RoleFieldType = 'name' | 'description';

export interface EditEmployeeType {
  employee: EmployeeType;
  onEmployeeInfoChange: (
    field: EmployeeFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;

  employeeAddress: AddressType;
  onEmployeeAddressChange: (
    field: AddressFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;

  office: { id: number; name: string; description?: string };
  onOfficeChange: (
    field: OfficeFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  officesList: { id: number; name: string; description?: string }[];

  department: DepartmentType;
  onDepartmentChange: (
    field: DepartmentFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  departmentsList: { id: number; name: string; description: string }[];

  role: RoleType;
  onRoleChange: (
    field: RoleFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  rolesList: { id: number; name: string; description: string }[];

  projects: Array<ProjectType>;
  onProjectAdd: (
    index: number,
  ) => (event: MouseEvent<HTMLInputElement>) => void;
  onProjectRemove: (
    index: number,
  ) => (event: MouseEvent<HTMLInputElement>) => void;
  projectsList: { id: number; name: string; description?: string }[];

  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EditEmployeeInfoType {
  employee: EmployeeType;
  onEmployeeInfoChange: (
    field: EmployeeFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export interface EditEmployeeDepartmentType {
  department: DepartmentType;
  onDepartmentChange: (
    field: DepartmentFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export interface EditAddressType {
  address: CreateAddressType;
  onAddressChange: (
    field: AddressFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export interface EditProjectsType {
  projects: Array<ProjectType> | ProjectType;
  onProjectChange: (
    field: ProjectFieldType,
    index?: number,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface CardFormattedProp {
  headerText: string;
  buttonText: string | null;
  onEditButtonClick: () => void;
  data: any;
}

export interface EmployeeViewPresentationProp {
  employee: EmployeeType;
  department: DepartmentType;
  employeeAddress: AddressType;
  officeAddress: AddressType;
  projects: Array<ProjectType>;
}

export interface CreateEmployeeType {
  employee: EmployeeType;
  onEmployeeInfoChange: (
    field: EmployeeFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;

  employeeAddress: CreateAddressType;
  onEmployeeAddressChange: (
    field: AddressFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;

  department: DepartmentType;
  onDepartmentChange: (
    field: DepartmentFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;

  officeAddress: CreateAddressType;
  onOfficeAddressChange: (
    field: AddressFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;

  projects: Array<ProjectType>;
  onProjectChange: (
    index: number,
    field: ProjectFieldType,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;

  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EditProjectType {
  project: ProjectType;
  onProjectChange: (
    field: ProjectFieldType,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CreateProjectType {
  project: ProjectType;
  onProjectChange: (
    field: ProjectFieldType,
    index?: number,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EditOfficeAddressType {
  address: AddressType;
  onAddressChange: (
    field: AddressFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CreateOfficeAddressType {
  address: CreateAddressType;
  onAddressChange: (
    field: AddressFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EditDepartmentType {
  department: DepartmentType;
  onDepartmentChange: (
    field: DepartmentFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CreateDepartmentType {
  department: DepartmentType;
  onDepartmentChange: (
    field: DepartmentFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EditRoleType {
  role: RoleType;
  onRoleChange: (
    field: RoleFieldType,
  ) => (
    event:
      | SelectChangeEvent
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CreateRoleType {
  role: RoleType;
  onRoleChange: (
    field: RoleFieldType,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}
