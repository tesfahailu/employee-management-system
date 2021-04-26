export enum ErrorCode {
  BAD_USER_INPUT = 'User input error',
  VALIDATION_ERROR = 'Validation error',
}

export enum ErrorMessage {
  UNKNOWN = 'unknown error occurred.',
  NAME_ALREADY_EXIST = 'name already exist.',

  LOGIN_ALREADY_EXIST = 'check login credentials.',
  LOGIN_ARG_ERROR = 'could not find username or password does not match',

  ROLE_ARG_ERROR = 'provide a role id or name.',
  ROLE_NOT_FOUND = 'role not found. check role id or name.',

  PERMISSION_ARG_ERROR = 'provide either a valid permission id or a valid role id and resource id',
  PERMISSION_NOT_FOUND = 'permission not found. check permission id.',
  PERMISSION_INVALID_RESOURCE_ID = 'permission does not have a valid resource id.',

  RESOURCE_ARG_ERROR = 'provide a resource id or name',
  RESOURCE_NOT_FOUND = 'resource not found. check resource id or name.',
}
