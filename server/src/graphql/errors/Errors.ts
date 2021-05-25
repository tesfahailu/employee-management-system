export enum ErrorCode {
  BadUserInput = 'User input error',
  ValidationError = 'Validation error',
}

export enum ErrorMessage {
  Unknown = 'unknown error occurred.',
  NameAlreadyExist = 'name already exist.',

  UserNotFound = 'login not found. check login id.',
  UserAlreadyExist = 'check login credentials.',
  UserArgumentError = 'could not find username or password does not match.',

  EmployeeArgumentError = 'include a valid employee id.',
  EmployeeNotFound = 'employee not found. check employee id.',
  EmployeeValidationError = 'failed to create employee due to validation errors.',
  EmployeeInvalidEmail = 'please provide a valid email.',
  EmployeeInvalidMobile = 'please provide a vaild mobile number.',

  RoleArgumentError = 'provide a role id or name.',
  RoleNotFound = 'role not found. check role id or name.',

  PermissionArgumentError = 'provide either a valid permission id or a valid role id and resource id',
  PermissionNotFound = 'permission not found. check permission id.',
  PermissionInvalidResourceId = 'permission does not have a valid resource id.',

  ResourceArgumentError = 'provide a resource id or name.',
  ResourceNotFound = 'resource not found. check resource id or name.',

  ProjectArgumentError = 'provide either a valid project id or a valid project name.',
  ProjectNotFound = 'project not found. check the permission id or name.',

  EmployeeProjectArgumentError = 'provide either a valid employee project id or a valid employee id and project id',
  EmployeeProjectNotFound = 'employee project not found. check employee project id.',
  EmployeeProjectInvalidProjectId = 'employee project does not have a valid project id.',

  SessionNotFound = 'session/s not found. check session id.',

  SalaryNotFound = 'salary/s not found. check salary id.',

  DepartmentNotFound = 'department not found. check department id.',

  ExperienceNotFound = 'experience/s not found. check experience id.',

  LeaveNotFound = 'leave/s not found. check leave id.',

  OfficeNotFound = 'office not found. check office id.',

  OfficeAddressNotFound = 'office address not found. check office address id.',

  EmployeeAddressNotFound = 'employee address not found. check employee address id.',
}
