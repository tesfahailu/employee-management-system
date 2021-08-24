import { SelectChangeEvent } from '@material-ui/core';
import React, { ChangeEvent, MouseEvent, MouseEventHandler } from 'react';

//#region General Categories
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  type?: string;
  role?: string;
  office?: string;
  department?: string;
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

export interface SelectLabel {
  id: number;
  name: string;
  description?: string | null;
  abbreviation?: string | null;
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
  projects: Array<Project>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onProjectAdd: OnMouseClick;
  onProjectRemove: OnMouseClick;
  projectsList: Project[];
}

export interface FormProject {
  project: Project;
  onProjectChange: OnChangeField;
}

export interface FormDepartment<R> {
  department: R;
  errors: R;
  onChange: OnChangeSelect;
  onErrorChange: OnChangeSelect;
}

export interface FormRole<R> {
  role: R;
  onRoleChange: OnChangeField;
}
//#endregion

//#region Table
export interface HeadCell<R> {
  id: Omit<keyof R, 'id'> | 'action';
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}
//#endregion
