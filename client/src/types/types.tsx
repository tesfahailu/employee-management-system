import { ChangeEvent } from 'react';

export interface ViewEmployeeType {
  [index: string]: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  type: string;
}

export type EmployeeFieldType =
  | 'firstName'
  | 'lastName'
  | 'mobile'
  | 'email'
  | 'type';
export interface EditEmployeeInfoType {
  employee: ViewEmployeeType;
  onEmployeeInfoChange: (
    field: EmployeeFieldType,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  isFormChanged: boolean;
  saveDescription: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EmployeeDepartmentType {
  [index: string]: string;
  title: string;
  description: string;
}

export interface EditEmployeeDepartmentType {
  title: string;
  onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  description: string;
  onDescriptionChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isFormChanged: boolean;
  saveDescription: React.MouseEventHandler<HTMLButtonElement>;
}

export interface AddressType {
  [index: string]: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: string;
  country: string;
}

export interface ProjectType {
  [index: string]: string;
  name: string;
  description: string;
}

export interface FormattedCardProp {
  cardHeaderText: string;
  cardHeaderActionButtonText: string;
  onEditButtonClick: () => void;
  cardContentData: any;
}

export interface EmployeeViewPresentationProp {
  employee: ViewEmployeeType;
  department: EmployeeDepartmentType;
  employeeAddress: AddressType;
  officeAddress: AddressType;
  projects: Array<ProjectType>;
}
