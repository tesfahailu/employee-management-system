import {
  DepartmentWithId,
  ProjectWithId,
  RoleWithId,
  SelectLabel,
} from '../../../types/types';

export const statesList: SelectLabel[] = [
  { id: 0, name: 'Massachusetts', abbreviation: 'MA' },
  { id: 1, name: 'New York', abbreviation: 'NY' },
];

export const countriesList: SelectLabel[] = [
  { id: 0, name: 'United States of America', abbreviation: 'USA' },
  { id: 1, name: 'Canada', abbreviation: 'CANA' },
];

export const officesList: SelectLabel[] = [
  { id: 0, name: 'los angeles', description: '' },
  { id: 1, name: 'boston', description: '' },
  { id: 2, name: 'miama', description: '' },
];
export const departmentsList: DepartmentWithId[] = [
  { id: 0, name: 'marketing', description: '' },
  { id: 1, name: 'operations', description: '' },
  { id: 2, name: 'finanace', description: '' },
  { id: 3, name: 'sales', description: '' },
  { id: 4, name: 'product', description: '' },
];
export const rolesList: RoleWithId[] = [
  {
    id: 0,
    name: 'admin',
    description: 'can view, edit, and delete all resources',
  },
  {
    id: 1,
    name: 'basic',
    description: 'can view, edit, and delete own resources',
  },
];
export const projectsList: ProjectWithId[] = [
  { id: 0, name: 'Amazon', description: 'Integrate with AWS' },
  { id: 1, name: 'Microsoft', description: 'Integrate with Azure' },
  { id: 2, name: 'Google', description: 'Integrate with Firebase' },
];
