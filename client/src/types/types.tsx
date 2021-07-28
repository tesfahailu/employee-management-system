import { ChangeEvent } from 'react';

export interface EmployeeType {
  [index: string]: string | undefined;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  type?: string;
}

export interface DepartmentType {
  [index: string]: number | string | undefined;
  id?: number;
  title: string;
  description: string;
}

export interface AddressType {
  [index: string]: number | string | undefined;
  id?: number;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface ProjectType {
  [index: string]: number | string;
  id: number;
  name: string;
  description: string;
}

export interface RoleType {
  [index: string]: number | string;
  id: number;
  name: string;
  description: string;
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

export type ProjectFieldType = 'name' | 'description';
export type RoleFieldType = 'name' | 'description';

export interface EditEmployeeType {
  employee: EmployeeType;
  onEmployeeInfoChange: (
    field: EmployeeFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;

  employeeAddress: AddressType;
  onEmployeeAddressChange: (
    field: AddressFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;

  department: DepartmentType;
  onDepartmentChange: (
    field: DepartmentFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;

  officeAddress: AddressType;
  onOfficeAddressChange: (
    field: AddressFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;

  projects: Array<ProjectType>;
  onProjectChange: (
    index: number,
    field: ProjectFieldType,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;

  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EditEmployeeInfoType {
  employee: EmployeeType;
  onEmployeeInfoChange: (
    field: EmployeeFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;
}

export interface EditEmployeeDepartmentType {
  department: DepartmentType;
  onDepartmentChange: (
    field: DepartmentFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;
}

export interface EditAddressType {
  address: AddressType;
  onAddressChange: (
    field: AddressFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;
}

export interface EditProjectsType {
  projects: Array<ProjectType>;
  onProjectChange: (
    index: number,
    field: ProjectFieldType,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface FormattedCardProp {
  cardHeaderText: string;
  cardHeaderActionButtonText: string | null;
  onEditButtonClick: () => void;
  cardContentData: any;
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
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;

  employeeAddress: AddressType;
  onEmployeeAddressChange: (
    field: AddressFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;

  department: DepartmentType;
  onDepartmentChange: (
    field: DepartmentFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;

  officeAddress: AddressType;
  onOfficeAddressChange: (
    field: AddressFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
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
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EditOfficeAddressType {
  address: AddressType;
  onAddressChange: (
    field: AddressFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CreateOfficeAddressType {
  address: AddressType;
  onAddressChange: (
    field: AddressFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EditDepartmentType {
  department: DepartmentType;
  onDepartmentChange: (
    field: DepartmentFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CreateDepartmentType {
  department: DepartmentType;
  onDepartmentChange: (
    field: DepartmentFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EditRoleType {
  role: RoleType;
  onRoleChange: (
    field: RoleFieldType,
  ) => (
    event: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>,
  ) => void;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CreateRoleType {
  role: RoleType;
  onRoleChange: (
    field: RoleFieldType,
  ) => (event: ChangeEvent<{ name?: string; value: unknown }>) => void;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}
