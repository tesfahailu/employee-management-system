import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, MouseEvent, MouseEventHandler } from 'react';

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
export type OnChangeField = (event: ChangeEvent<HTMLInputElement>) => void;

export type OnChangeSelect = (
  event:
    | SelectChangeEvent
    | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

export type OnMouseSelect = (
  event: MouseEvent<HTMLDivElement, MouseEvent>,
) => void;

export type OnMouseClick = (
  id: number,
) => (event: MouseEvent<HTMLInputElement>) => void;

export type HandleDeleteRow = (
  rowId: number,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenSnackBar: React.Dispatch<
    React.SetStateAction<{ open: boolean; success: boolean }>
  >,
) => MouseEventHandler<HTMLButtonElement>;

export type HandleDeleteRows = (
  selected: readonly number[],
  setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenSnackBar: React.Dispatch<
    React.SetStateAction<{ open: boolean; success: boolean }>
  >,
) => React.MouseEventHandler<HTMLButtonElement>;
//#endregion

//#region Forms
export interface EmployeeForm<R> {
  employee: R;
  employeeErrors: R;
  onEmployeeInfoChange: OnChangeSelect;
}

export interface AddressForm<R> {
  address: R;
  addressErrors: R;
  onAddressChange: OnChangeSelect;
}

export interface CompanyForm {
  office: OfficeLabel;
  onOfficeChange: OnChangeSelect;
  officesList: OfficeLabel[];

  department: Department;
  onDepartmentChange: OnChangeSelect;
  departmentsList: Department[];

  role: Role;
  onRoleChange: OnChangeSelect;
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
  onProjectChange: OnChangeField;
}

export interface DepartmentForm<R> {
  department: R;
  onDepartmentChange: OnChangeSelect;
}

export interface RoleForm<R> {
  role: R;
  onRoleChange: OnChangeField;
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

export interface EmployeePageViewAll {
  rowsData: Employee[];
  handleDeleteRow: HandleDeleteRow;
  handleDeleteRows: HandleDeleteRows;
}
//#endregion

//#region Office Pages
export interface OfficePageCreate {
  address: Omit<Address, 'id'>;
  addressErrors: Omit<Address, 'id'>;
  onAddressChange: OnChangeSelect;
  isFormComplete: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface OfficePageEdit {
  address: Address;
  addressErrors: Address;
  onAddressChange: OnChangeSelect;
  isFormChanged: boolean;
  saveChanges: React.MouseEventHandler<HTMLButtonElement>;
}

export interface OfficePageViewAll {
  rowsData: Address[];
  handleDeleteRow: HandleDeleteRow;
  handleDeleteRows: HandleDeleteRows;
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

export interface DepartmentPageViewAll {
  rowsData: Department[];
  handleDeleteRow: HandleDeleteRow;
  handleDeleteRows: HandleDeleteRows;
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

export interface RolePageViewAll {
  rowsData: Role[];
  handleDeleteRow: HandleDeleteRow;
  handleDeleteRows: HandleDeleteRows;
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

export interface ProjectPageViewAll {
  rowsData: Project[];
  handleDeleteRow: HandleDeleteRow;
  handleDeleteRows: HandleDeleteRows;
}
//#endregion
