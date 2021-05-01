export enum ErrorCode {
  BAD_USER_INPUT = 'User input error',
  VALIDATION_ERROR = 'Validation error',
}

export enum ErrorMessage {
  UNKNOWN = 'unknown error occurred.',
  NAME_ALREADY_EXIST = 'name already exist.',

  USER_NOT_FOUND = 'login not found. check login id.',
  USER_ALREADY_EXIST = 'check login credentials.',
  USER_ARG_ERROR = 'could not find username or password does not match.',

  EMPLOYEE_ARG_ERROR = 'include a valid employee id.',
  EMPLOYEE_NOT_FOUND = 'employee not found. check employee id.',
  EMPLOYEE_VALIDATION_ERROR = 'failed to create employee due to validation errors.',
  EMPLOYEE_INVALID_EMAIL = 'please provide a valid email.',
  EMPLOYEE_INVALID_MOBILE = 'please provide a vaild mobile number.',

  ROLE_ARG_ERROR = 'provide a role id or name.',
  ROLE_NOT_FOUND = 'role not found. check role id or name.',

  PERMISSION_ARG_ERROR = 'provide either a valid permission id or a valid role id and resource id',
  PERMISSION_NOT_FOUND = 'permission not found. check permission id.',
  PERMISSION_INVALID_RESOURCE_ID = 'permission does not have a valid resource id.',

  RESOURCE_ARG_ERROR = 'provide a resource id or name.',
  RESOURCE_NOT_FOUND = 'resource not found. check resource id or name.',

  PROJECT_ARG_ERROR = 'provide either a valid project id or a valid project name.',
  PROJECT_NOT_FOUND = 'project not found. check the permission id or name.',

  EMPLOYEE_PROJECT_ARG_ERROR = 'provide either a valid employee project id or a valid employee id and project id',
  EMPLOYEE_PROJECT_NOT_FOUND = 'employee project not found. check employee project id.',
  EMPLOYEE_PROJECT_INVALID_PROJECT_ID = 'employee project does not have a valid project id.',

  SESSION_NOT_FOUND = 'session/s not found. check session id.',

  SALARY_NOT_FOUND = 'salary/s not found. check salary id.',

  DEPARTMENT_NOT_FOUND = 'department not found. check department id.',

  EXPERIENCE_NOT_FOUND = 'experience/s not found. check experience id.',

  LEAVE_NOT_FOUND = 'leave/s not found. check leave id.',

  OFFICE_NOT_FOUND = 'office not found. check office id.',

  OFFICE_ADDRESS_NOT_FOUND = 'office address not found. check office address id.',

  EMPLOYEE_ADDRESS_NOT_FOUND = 'employee address not found. check employee address id.',
}
