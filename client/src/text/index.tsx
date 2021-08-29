//#region Forms
export enum FormEmployeeText {
  Header = 'Employee: ',
  SaveButton = 'Save',
  FirstName = 'First Name: ',
  LastName = 'Last Name: ',
  Mobile = 'Mobile: ',
  Email = 'Email: ',
  Type = 'Type: ',
}

export enum FormAddressText {
  Header = 'Address: ',
  StreetAddress1 = 'Street Address 1: ',
  StreetAddress2 = 'Street Address 2: ',
  City = 'City: ',
  State = 'State: ',
  Country = 'Country: ',
  ZipCode = 'Zip Code: ',
}

export enum FormCompanyText {
  Header = 'Company:',
  OfficeLabel = 'Office Location:',
  DepartmentLabel = 'Department:',
  RoleLabel = 'Role:',
}

export enum FormDepartmentText {
  Header = 'Department:',
  NameLabel = 'Name:',
  DescriptionLabel = 'Description:',
}

export enum FormRoleText {
  Header = 'Role:',
  NameLabel = 'Name:',
  DescriptionLabel = 'Description:',
}

export enum FormProjectsListText {
  Header = 'Projects:',
  ButtonAdd = 'Add Project',
  ListEmpty = 'You are not involved with any projects.',
}

export enum FormProjectText {
  Header = 'Project:',
  NameLabel = 'Name:',
  DescriptionLabel = 'Description:',
}
//#endregion
//#region Dialog
export enum DialogAddProjectText {
  PrimaryTitle = 'Add Project',
  Subtitle = 'Select a project to add',
  ButtonCancel = 'Cancel',
}

export enum DialogDeleteRowText {
  Body = 'Are you sure you want to delete row?',
  Accept = 'Yes',
  Decline = 'Cancel',
  Success = 'Row deleted successfully',
  Error = "Row wasn't deleted",
}

export enum DialogDeleteRowsText {
  Body = 'Are you sure you want to delete all rows?',
  Accept = 'Yes',
  Decline = 'Cancel',
  Success = 'Rows deleted successfully',
  Error = "Rows weren't deleted",
}
//#endregion
//#region Table
export enum TableToolBarText {
  SearchIcon = 'Search',
  CSVLink = 'Download CSV',
  Selected = 'Selected',
}

export enum TableBodyText {
  NoData = 'No results found.',
  ViewIcon = 'View',
  EditIcon = 'Edit',
  DeleteIcon = 'Delete',
}
//#endregion
//#region Error Messages
export enum RegisterErrorText {
  UsernameTooShort = 'username must be greater than 5 characters.',
  UsernameCharacterError = 'username should only include numbers, letters, and underscores.',
  UsernameAlreadyExist = 'The username already exists. Please use a different username.',
  UsernameMismatch = 'username does not match.',
  PasswordTooShort = 'password must be greater than 5 alphanumeric charcters. ',
  PasswordMismatch = 'password does not match.',
}

export enum GeneralErrorText {
  FieldEmpty = 'field cannot be empty.',
}

export enum EmployeeErrorText {
  EmailInvalid = 'email is invalid.',
  PhoneNumberInvalid = 'phone number is invalid.',
}
//#endregion
//#region Register Page
export enum RegisterPageText {
  PageHeader = 'Register New User',
  ButtonRegister = 'Register',
  ButtonSignin = 'Already have an accout? Sign in',
}
//#endregion
//#region Login Page
export enum LoginPageText {
  PageHeader = 'Sign In',
  ButtonSignin = 'Sign In',
  ButtonForgotPassword = 'Forgot Password?',
  ButtonRegister = "Don't have an account? Register!",
}
//#endregion
//#region Setting Page
export enum SettingsPageText {
  PageHeader = 'Settings:',
  PageSubHeader = 'Update images, employee info, mode, or color',
}

export enum SettingsUploadText {
  PaperHeader = 'Upload Image:',
  PaperSelectImage = 'Select an image to change profile picture.',
  PaperSelectedImage = 'Crop the image below and hit the save button.',
  ButtonCancel = 'Cancel',
  ButtonAccept = 'Save',
  ButtonUpload = 'Upload',
}

export enum SettingsModeText {
  Header = 'Mode:',
  IconLight = 'light',
  IconSystem = 'system',
  IconDark = 'dark',
}

export enum SettingsPaletteText {
  Header = 'Palette:',
  Primary = 'primary',
  Secondary = 'secondary',
  Shade = 'Shade:',
  ButtonSetColor = 'Set App Colors',
  ButtonResetColor = 'Reset App Colors',
}
//#endregion
//#region Employee Page
export enum EmployeesViewPageText {
  PageHeader = 'View Employees:',
  PageSubHeader = 'View, edit or delete employee by clicking on the appropriate button in the actions column',
  ButtonCreate = 'Create',
  TableHeader = 'Employees Table:',
}

export enum EmployeeViewPageText {
  PageHeader = 'View Employee:',
  PageSubHeader = 'View employee details or edit employee information by clicking on the edit button in the appropriate section',
  EmployeeInfo = 'Employee Info:',
  Department = 'Department:',
  EmployeeAddress = 'Employee Address:',
  OfficeeAddress = 'Office Address:',
  CurrentProjects = 'Current Projects: ',
  ButtonEdit = 'Edit',
  ButtonEditAll = 'Edit All',
}

export enum EmployeeEditPageText {
  PageHeader = 'Edit Employee:',
  PageSubHeader = "Edit employee / employee address or assign to a department, office, or projects. Don't forget to save",
  EmployeeInfo = 'Employee:',
  EmployeeAddress = 'Address:',
  Company = 'Company:',
  OfficeeAddress = 'Office Address:',
  Projects = 'Projects:',
  ButtonSave = 'Save',
}

export enum EmployeeCreatePageText {
  PageHeader = 'Create Employee:',
  PageSubHeader = 'Fill in the information below to create a new employee',
  ButtonSave = 'Save',
}
//#endregion
//#region Project Page
export enum ProjectsViewPageText {
  PageHeader = 'View Projects:',
  PageSubHeader = 'View employee details or edit employee information by clicking on the edit button in the appropriate section',
  ButtonCreate = 'Create',
  TableHeader = 'Projects Table:',
}
export enum ProjectViewPageText {
  PageHeader = 'View Project:',
  PageSubHeader = 'View project details or edit project information by clicking on the edit button',
  Project = 'Project:',
  ButtonEdit = 'Edit',
  ButtonEditAll = 'Edit All',
}

export enum ProjectEditPageText {
  PageHeader = 'Edit Project:',
  PageSubHeader = "Edit project name and/or description and don't forget to save",
  ButtonSave = 'Save',
}

export enum ProjectCreatePageText {
  PageHeader = 'Create Project:',
  PageSubHeader = 'Create a new project and include any additional information if necessary',
  ButtonSave = 'Save',
}
//#endregion
//#region Office Page
export enum OfficesViewPageText {
  PageHeader = 'View Offices:',
  PageSubHeader = 'View office details or edit office address by clicking on the edit button in the appropriate section',
  ButtonCreate = 'Create',
  TableHeader = 'Offices Table:',
}

export enum OfficeViewPageText {
  PageHeader = 'View Office:',
  PageSubHeader = 'View office details or edit office address by clicking on the edit button at the bottom of the page',
  OfficeAddress = 'Office Address:',
  ButtonEdit = 'Edit',
  ButtonEditAll = 'Edit All',
}

export enum OfficeEditPageText {
  PageHeader = 'Edit Office:',
  PageSubHeader = "Edit office name or address and don't forget to save",
  ButtonSave = 'Save',
}

export enum OfficeCreatePageText {
  PageHeader = 'Create Office:',
  PageSubHeader = 'Create a new office and include any additional information if necessary',
  ButtonSave = 'Save',
}
//#endregion
//#region Department Page
export enum DepartmentsViewPageText {
  PageHeader = 'View Departments:',
  PageSubHeader = 'View department details or edit departments by clicking on the edit button in the appropriate section',
  ButtonCreate = 'Create',
  TableHeader = 'Departments Table:',
}

export enum DepartmentViewPageText {
  PageHeader = 'View Department:',
  PageSubHeader = 'View or edit department details by clicking on the edit button at the bottom of the page',
  Department = 'Department:',
  ButtonEdit = 'Edit',
  ButtonEditAll = 'Edit All',
}

export enum DepartmentEditPageText {
  PageHeader = 'Edit Department:',
  PageSubHeader = "Edit department name or description and don't forget to save",
  ButtonSave = 'Save',
}

export enum DepartmentCreatePageText {
  PageHeader = 'Create Department:',
  PageSubHeader = 'Create a new department and include a description',
  ButtonSave = 'Save',
}
//#endregion
//#region Role Page
export enum RolesViewPageText {
  PageHeader = 'View Roles:',
  PageSubHeader = 'View roles detail or edit role by clicking on the edit button in the actions column',
  ButtonCreate = 'Create',
  TableHeader = 'Roles Table:',
}

export enum RoleViewPageText {
  PageHeader = 'View Role:',
  PageSubHeader = 'View or edit role details by clicking on the edit button at the bottom of the page',
  Role = 'Role:',
  ButtonEdit = 'Edit',
  ButtonEditAll = 'Edit All',
}

export enum RoleEditPageText {
  PageHeader = 'Edit Role:',
  PageSubHeader = "Edit role name and/or description and don't forget to save",
  ButtonSave = 'Save',
}

export enum RoleCreatePageText {
  PageHeader = 'Create Role:',
  PageSubHeader = 'Create a new role and include a description',
  ButtonSave = 'Save',
}
//#endregion
