import { SelectChangeEvent } from '@material-ui/core';
import { ChangeEvent, MouseEvent } from 'react';

//#region General Categories
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
//#endregion

//#region EventHandlers
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
//#endregion

//#region Forms
export interface EmployeeForm<R> {
  employee: R;
  onEmployeeInfoChange: OnChangeSelect<R>;
}

export interface AddressForm<R> {
  address: R;
  onAddressChange: OnChangeSelect<R>;
}

export interface CompanyForm {
  office: OfficeLabel;
  onOfficeChange: OnChangeSelect<OfficeLabel>;
  officesList: OfficeLabel[];

  department: Department;
  onDepartmentChange: OnChangeSelect<Department>;
  departmentsList: Department[];

  role: Role;
  onRoleChange: OnChangeSelect<Role>;
  rolesList: Role[];
}

export interface ProjectsListForm {
  projects: Array<Project>;
  onProjectAdd: OnMouseClick;
  onProjectRemove: OnMouseClick;
  projectsList: Project[];

  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ProjectForm {
  project: Project;
  onProjectChange: OnChangeField<Project>;
}

export interface DepartmentForm<R> {
  department: R;
  onDepartmentChange: OnChangeSelect<Department>;
}

export interface RoleForm<R> {
  role: R;
  onRoleChange: OnChangeField<Role>;
}
//#endregion

//#region Employee Pages
export interface EmployeePageCreate
  extends EmployeeForm<Omit<Employee, 'id'>>,
    AddressForm<Omit<Address, 'id'>>,
    CompanyForm,
    ProjectsListForm {
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface EmployeePageEdit
  extends EmployeeForm<Employee>,
    AddressForm<Address>,
    CompanyForm,
    ProjectsListForm {
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
//#endregion

//#region Office Pages
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
//#endregion

//#region Department Pages
export interface DepartmentPageCreate
  extends DepartmentForm<Omit<Department, 'id'>> {
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface DepartmentPageEdit extends DepartmentForm<Department> {
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}
//#endregion

//#region Role Pages
export interface RolePageCreate extends RoleForm<Omit<Role, 'id'>> {
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface RolePageEdit extends RoleForm<Role> {
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}
//#endregion

//#region Project Pages
export interface ProjectPageEdit extends ProjectForm {
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ProjectPageCreate extends ProjectForm {
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}
//#endregion

export interface CardFormattedProp {
  headerText: string;
  buttonText: string | null;
  onEditButtonClick: () => void;
  data: any;
}
