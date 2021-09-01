import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, MouseEvent, MouseEventHandler } from 'react';

//#region General Categories
export interface Employee {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  type?: string;
  role?: string;
  office?: string;
  department?: string;
}

export interface EmployeeWithId extends Employee {
  id: number;
}

export interface Address {
  streetAddress1: string;
  streetAddress2?: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface AddressWithId extends Address {
  id: number;
}

export interface Department {
  name: string;
  description?: string;
}

export interface DepartmentWithId extends Department {
  id: number;
}

export interface Role {
  name: string;
  description?: string;
}

export interface RoleWithId extends Role {
  id: number;
}

export interface Project {
  name: string;
  description?: string;
}

export interface ProjectWithId extends Project {
  id: number;
}

export interface SelectLabel {
  id: number;
  name: string;
  description?: string;
  abbreviation?: string;
}

export interface Company {
  office: string;
  department: string;
  role: string;
}

export interface SectionProp {
  setIsError?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsErrors?: React.Dispatch<
    React.SetStateAction<{
      employee: boolean;
      address: boolean;
      company: boolean;
    }>
  >;
  setIsFormComplete?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFormChanged?: React.Dispatch<React.SetStateAction<boolean>>;
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

export type HandleSelectRow<R> = (event: MouseEvent, row: R) => void;

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
export interface FormEmployee<R> {
  employee: R;
  errors: R;
  onChange: OnChangeSelect;
  onErrorChange: OnChangeSelect;
  showButton?: boolean;
  isValid?: boolean;
  isChanged?: boolean;
  onSave?: () => void;
}

export interface FormAddress<R> {
  address: R;
  errors: R;
  onChange: OnChangeSelect;
  onErrorChange: OnChangeSelect;
  statesList: SelectLabel[];
  countriesList: SelectLabel[];
}

export interface FormCompany {
  company: Company;
  errors: Company;
  onCompanyChange: OnChangeSelect;
  onErrorChange: OnChangeSelect;
  officesList: SelectLabel[];
  departmentsList: SelectLabel[];
  rolesList: SelectLabel[];
}

export interface FormProjectsList {
  projects: Array<ProjectWithId>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onProjectAdd: OnMouseClick;
  onProjectRemove: OnMouseClick;
  projectsList: ProjectWithId[];
}

export interface FormProject {
  project: Project;
  errors: Project;
  onChange: OnChangeSelect;
  onErrorChange: OnChangeSelect;
}

export interface FormDepartment<R> {
  department: R;
  errors: R;
  onChange: OnChangeSelect;
  onErrorChange: OnChangeSelect;
}

export interface FormRole<R> {
  role: R;
  errors: R;
  onChange: OnChangeSelect;
  onErrorChange: OnChangeSelect;
}
//#endregion

//#region Table
export interface HeadCell<R> {
  id: keyof R | 'actions';
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}
//#endregion
