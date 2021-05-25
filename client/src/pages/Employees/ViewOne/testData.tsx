import {
  DepartmentType,
  EmployeeQuery,
  EmployeeType,
} from '../../../generated/graphql';

export const employeeData: EmployeeQuery = {
  __typename: 'Query',
  employee: {
    __typename: 'Employee',
    id: 3,
    firstName: 'Tesfa',
    lastName: 'Hailu',
    mobile: '855-540-3214',
    email: 'telu@gmail.com',
    type: EmployeeType.PartTime,
    department: {
      title: DepartmentType.Sales,
      description: 'Helping me get work',
    },
    projects: [
      {
        __typename: 'Project',
        id: 1,
        name: 'Amazon Echo',
        description: 'Cool',
      },
      {
        __typename: 'Project',
        id: 2,
        name: 'Amazon Web',
        description: 'cooler',
      },
      {
        __typename: 'Project',
        id: 3,
        name: 'Amazon Web Services',
        description: 'coolest',
      },
    ],
    employeeAddress: {
      __typename: 'EmployeeAddress',
      id: 2,
      streetAddress1: '156 NewMan Street',
      streetAddress2: 'Apt. 1',
      city: 'Boston',
      state: { __typename: 'State', id: 30, abbreviation: 'MA' },
      country: { __typename: 'Country', id: 1, name: 'USA' },
      zipCode: '04567',
    },
    office: {
      __typename: 'Office',
      address: {
        __typename: 'OfficeAddress',
        id: 1,
        streetAddress1: '190 NewMan Street',
        streetAddress2: 'Apt. 1',
        city: 'Boston',
        state: { __typename: 'State', id: 30, abbreviation: 'MA' },
        country: { __typename: 'Country', id: 1, name: 'USA' },
        zipCode: '04567',
      },
    },
  },
};
