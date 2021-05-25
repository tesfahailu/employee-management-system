import { ChangeEvent } from 'react';

export interface EmployeeType {
  [index: string]: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  type: string;
}

export interface DepartmentType {
  [index: string]: string;
  title: string;
  description: string;
}

export interface AddressType {
  [index: string]: string;
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
