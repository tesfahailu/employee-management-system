import { SelectChangeEvent } from '@material-ui/core';
import { ChangeEvent, MouseEvent } from 'react';

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  type?: string | null;
  role?: string | null;
  office?: string | null;
  department?: string | null;
}

export interface Address {
  id: number;
  streetAddress1: string;
  streetAddress2: string | null;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface Department {
  id: number;
  name: string;
  description: string | null;
}

export interface Role {
  id: number;
  name: string;
  description: string | null;
}

export interface Project {
  id: number;
  name: string;
  description: string | null;
}

export interface OfficeLabel {
  id: number;
  name: string;
  description: string | null;
}

export type OnChangeIndex<Context> = (
  index: number,
  field: keyof Context,
) => (event: ChangeEvent<HTMLInputElement>) => void;

export type OnChangeField<Context> = (
  field: keyof Context,
) => (event: ChangeEvent<HTMLInputElement>) => void;

export type OnChangeSelect<Context> = (
  field: keyof Context,
) => (
  event:
    | SelectChangeEvent
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

export type OnMouseClick = (
  index: number,
) => (event: MouseEvent<HTMLInputElement>) => void;

export interface EmployeeFormCreate {
  employee: Omit<Employee, 'id'>;
  onEmployeeInfoChange: OnChangeSelect<Employee>;
}

export interface AddressFormCreate {
  address: Omit<Address, 'id'>;
  onAddressChange: OnChangeSelect<Address>;
}

export interface DepartmentFormCreate {
  department: Omit<Department, 'id'>;
  onDepartmentChange: OnChangeSelect<Department>;
}

export interface EmployeePageCreate
  extends EmployeeFormCreate,
    DepartmentFormCreate {
  employeeAddress: Omit<Address, 'id'>;
  onEmployeeAddressChange: OnChangeSelect<Address>;

  officeAddress: Omit<Address, 'id'>;
  onOfficeAddressChange: OnChangeSelect<Address>;

  projects: Array<Project>;
  onProjectChange: OnChangeIndex<Project>;

  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EmployeePageEdit {
  employee: Employee;
  onEmployeeInfoChange: OnChangeSelect<Employee>;

  employeeAddress: Address;
  onEmployeeAddressChange: OnChangeSelect<Address>;

  office: OfficeLabel;
  onOfficeChange: OnChangeSelect<OfficeLabel>;
  officesList: OfficeLabel[];

  department: Department;
  onDepartmentChange: OnChangeSelect<Department>;
  departmentsList: Department[];

  role: Role;
  onRoleChange: OnChangeSelect<Role>;
  rolesList: Role[];

  projects: Array<Project>;
  onProjectAdd: OnMouseClick;
  onProjectRemove: OnMouseClick;
  projectsList: Project[];

  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EmployeePageView {
  employee: Employee;
  department: Department;
  employeeAddress: Address;
  officeAddress: Address;
  projects: Array<Project>;
}

export interface OfficePageCreate {
  address: Omit<Address, 'id'>;
  onAddressChange: OnChangeSelect<Address>;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface OfficePageEdit {
  address: Address;
  onAddressChange: OnChangeSelect<Address>;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface DepartmentPageCreate {
  department: Omit<Department, 'id'>;
  onDepartmentChange: OnChangeSelect<Department>;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface DepartmentPageEdit {
  department: Department;
  onDepartmentChange: OnChangeSelect<Department>;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface RolePageCreate {
  role: Omit<Role, 'id'>;
  onRoleChange: OnChangeSelect<Role>;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface RolePageEdit {
  role: Role;
  onRoleChange: OnChangeField<Role>;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ProjectPageEdit {
  project: Project;
  onProjectChange: OnChangeField<Project>;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ProjectPageCreate {
  project: Project;
  onProjectChange: (
    field: keyof Project,
    index?: number,
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface CardFormattedProp {
  headerText: string;
  buttonText: string | null;
  onEditButtonClick: () => void;
  data: any;
}
