import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['Int'];
  employeeAddresses?: Maybe<Array<Maybe<EmployeeAddress>>>;
  officeAddresses?: Maybe<Array<Maybe<OfficeAddress>>>;
  name: Scalars['String'];
};


export type Department = {
  __typename?: 'Department';
  id: Scalars['Int'];
  employees?: Maybe<Array<Maybe<Employee>>>;
  title: DepartmentType;
  description: Scalars['String'];
};

/** Department Type */
export enum DepartmentType {
  Marketing = 'MARKETING',
  Operations = 'OPERATIONS',
  Sales = 'SALES',
  HumanResources = 'HUMAN_RESOURCES',
  Engineering = 'ENGINEERING'
}

export type Employee = {
  __typename?: 'Employee';
  employeeAddress?: Maybe<EmployeeAddress>;
  id: Scalars['Int'];
  supervisors?: Maybe<Array<Maybe<Employee>>>;
  experiences?: Maybe<Array<Maybe<Experience>>>;
  leaves?: Maybe<Array<Maybe<Leave>>>;
  login?: Maybe<User>;
  employeeProjects?: Maybe<Array<Maybe<EmployeeProject>>>;
  projects?: Maybe<Array<Maybe<Project>>>;
  salaries?: Maybe<Array<Maybe<Salary>>>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  office?: Maybe<Office>;
  type?: Maybe<EmployeeType>;
  department?: Maybe<Department>;
};

export type EmployeeAddress = {
  __typename?: 'EmployeeAddress';
  id: Scalars['Int'];
  employes: Array<Employee>;
  streetAddress1: Scalars['String'];
  streetaddress2: Scalars['String'];
  city: Scalars['String'];
  state: State;
  country: Country;
  zipCode: Scalars['String'];
};

export type EmployeeProject = {
  __typename?: 'EmployeeProject';
  id: Scalars['Int'];
  sessions?: Maybe<Array<Maybe<Session>>>;
  employee: Employee;
  project: Project;
  addDate: Scalars['DateTime'];
  removeDate?: Maybe<Scalars['DateTime']>;
};

/** Employee Type */
export enum EmployeeType {
  Permenant = 'PERMENANT',
  Contract = 'CONTRACT',
  Fulltime = 'FULLTIME',
  Parttime = 'PARTTIME'
}

export type Experience = {
  __typename?: 'Experience';
  id: Scalars['ID'];
  start: Scalars['DateTime'];
  end: Scalars['DateTime'];
  position?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
};

export type Leave = {
  __typename?: 'Leave';
  id: Scalars['ID'];
  type: LeaveType;
  to: Scalars['DateTime'];
  from: Scalars['DateTime'];
  description: Scalars['String'];
};

/** Leave Types */
export enum LeaveType {
  Vacation = 'VACATION',
  Sick = 'SICK',
  Holiday = 'HOLIDAY',
  Personal = 'PERSONAL'
}

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLeave: SuccessResponse;
  updateLeave: SuccessResponse;
  deleteLeave: SuccessResponse;
  createExperience: SuccessResponse;
  updateExperience: SuccessResponse;
  deleteExperience: SuccessResponse;
  createDepartment: SuccessResponse;
  updateDepartment: SuccessResponse;
  deleteDepartment: SuccessResponse;
  createEmployee: SuccessResponse;
  updateEmployee: SuccessResponse;
  deleteEmployee: SuccessResponse;
  register: Scalars['Boolean'];
  login: LoginResponse;
  revokeRefreshTokensForUser: Scalars['Boolean'];
  createRole: SuccessResponse;
  updateRole: SuccessResponse;
  deleteRole: SuccessResponse;
  createResource: SuccessResponse;
  updateResource: SuccessResponse;
  deleteResource: SuccessResponse;
  updatePermission: SuccessResponse;
  createOffice: SuccessResponse;
  updateOffice: SuccessResponse;
  deleteOffice: SuccessResponse;
  createProject: SuccessResponse;
  updateProject: SuccessResponse;
  createSession: SuccessResponse;
  updateSession: SuccessResponse;
  deleteSession: SuccessResponse;
};


export type MutationCreateLeaveArgs = {
  to?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};


export type MutationUpdateLeaveArgs = {
  to?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteLeaveArgs = {
  id: Scalars['Float'];
};


export type MutationCreateExperienceArgs = {
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
};


export type MutationUpdateExperienceArgs = {
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  position?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['Float'];
};


export type MutationCreateDepartmentArgs = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<DepartmentType>;
};


export type MutationUpdateDepartmentArgs = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<DepartmentType>;
  id: Scalars['Float'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['Float'];
};


export type MutationCreateEmployeeArgs = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  type?: Maybe<EmployeeType>;
  employeeAddressId?: Maybe<Scalars['Float']>;
  supervisorId?: Maybe<Scalars['Float']>;
  officeId?: Maybe<Scalars['Float']>;
  departmentId?: Maybe<Scalars['Float']>;
};


export type MutationUpdateEmployeeArgs = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  type?: Maybe<EmployeeType>;
  employeeAddressId?: Maybe<Scalars['Float']>;
  supervisorId?: Maybe<Scalars['Float']>;
  officeId?: Maybe<Scalars['Float']>;
  departmentId?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
};


export type MutationDeleteEmployeeArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  roleId?: Maybe<Scalars['Float']>;
  employeeId?: Maybe<Scalars['Float']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int'];
};


export type MutationCreateRoleArgs = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationUpdateRoleArgs = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
};


export type MutationDeleteRoleArgs = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
};


export type MutationCreateResourceArgs = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationUpdateResourceArgs = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
};


export type MutationDeleteResourceArgs = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
};


export type MutationUpdatePermissionArgs = {
  resourceId?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  canViewSelf?: Maybe<Scalars['Boolean']>;
  canViewAll?: Maybe<Scalars['Boolean']>;
  canCreate?: Maybe<Scalars['Boolean']>;
  canEdit?: Maybe<Scalars['Boolean']>;
  canDelete?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateOfficeArgs = {
  officeCapacity: Scalars['Float'];
};


export type MutationUpdateOfficeArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteOfficeArgs = {
  id: Scalars['Float'];
};


export type MutationCreateProjectArgs = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationUpdateProjectArgs = {
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};


export type MutationCreateSessionArgs = {
  task: Scalars['String'];
  department: DepartmentType;
  startDate: Scalars['String'];
  endDate: Scalars['String'];
};


export type MutationUpdateSessionArgs = {
  task: Scalars['String'];
  department: DepartmentType;
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  id: Scalars['Float'];
};


export type MutationDeleteSessionArgs = {
  id: Scalars['Float'];
};

export type Office = {
  __typename?: 'Office';
  id: Scalars['ID'];
  employees: Array<Maybe<Employee>>;
  address: OfficeAddress;
  capacity: Scalars['Int'];
};

export type OfficeAddress = {
  __typename?: 'OfficeAddress';
  id: Scalars['Int'];
  streetAddress1: Scalars['String'];
  streetAddress2: Scalars['String'];
  city: Scalars['String'];
  state: State;
  country: Country;
  zipCode: Scalars['String'];
};

export type Permission = {
  __typename?: 'Permission';
  id: Scalars['Int'];
  role?: Maybe<Role>;
  resource?: Maybe<Resource>;
  canViewSelf: Scalars['Boolean'];
  canViewAll: Scalars['Boolean'];
  canCreate: Scalars['Boolean'];
  canEdit: Scalars['Boolean'];
  canDelete: Scalars['Boolean'];
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['Int'];
  employProjects: Array<Maybe<EmployeeProject>>;
  employees?: Maybe<Array<Maybe<Employee>>>;
  name: Scalars['String'];
  description: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  leave: Office;
  leaves: Array<Leave>;
  experience: Experience;
  experiences: Array<Experience>;
  department: Department;
  departments: Array<Department>;
  employee: Employee;
  employees: Array<Employee>;
  user: User;
  users: Array<User>;
  hello: Scalars['String'];
  bye: Scalars['String'];
  role: Role;
  roles: Array<Role>;
  resource: Resource;
  resources: Array<Resource>;
  permission: Permission;
  permissions: Array<Permission>;
  offices: Array<Office>;
  project: Project;
  projects: Array<Project>;
  session: Session;
  sessions: Array<Session>;
};


export type QueryLeaveArgs = {
  id: Scalars['Float'];
};


export type QueryLeavesArgs = {
  employeeId: Scalars['Float'];
};


export type QueryExperienceArgs = {
  id: Scalars['Float'];
};


export type QueryExperiencesArgs = {
  employeeId: Scalars['Float'];
};


export type QueryDepartmentArgs = {
  id: Scalars['Float'];
};


export type QueryEmployeeArgs = {
  id: Scalars['Float'];
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};


export type QueryRoleArgs = {
  id: Scalars['Float'];
};


export type QueryResourceArgs = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
};


export type QueryPermissionArgs = {
  resourceId?: Maybe<Scalars['Float']>;
  roleId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};


export type QueryProjectArgs = {
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
};


export type QuerySessionArgs = {
  id: Scalars['Float'];
};

export type Resource = {
  __typename?: 'Resource';
  id: Scalars['Int'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Maybe<Role>>>;
  permission?: Maybe<Permission>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['Int'];
  login?: Maybe<Array<Maybe<User>>>;
  resources?: Maybe<Array<Maybe<Resource>>>;
  permission?: Maybe<Permission>;
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Salary = {
  __typename?: 'Salary';
  id: Scalars['Int'];
  amount: Scalars['Int'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
};

export type Session = {
  __typename?: 'Session';
  id: Scalars['Int'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  task: Scalars['String'];
  department: Scalars['String'];
};

export type State = {
  __typename?: 'State';
  id: Scalars['Int'];
  employeeAddresses?: Maybe<Array<Maybe<EmployeeAddress>>>;
  officeAddresses?: Maybe<Array<Maybe<OfficeAddress>>>;
  name: Scalars['String'];
  abbreviation: Scalars['String'];
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  success: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  role?: Maybe<Role>;
  lastLogin?: Maybe<Scalars['DateTime']>;
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;