import React, { Fragment, MouseEventHandler } from 'react';
import { EmployeesViewPageText } from '../../../text';
import Table from '../../../modules/components/Table';
import { PageHeader } from '../../../modules/components/PageHeader';
import { Employee } from '../../../types/types';

export interface HeadCell<R> {
  id: Omit<keyof R, 'id'> | 'action';
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}

const headCells: Array<HeadCell<Employee>> = [
  {
    id: 'lastName',
    numeric: false,
    disablePadding: true,
    label: 'Last Name',
  },
  {
    id: 'firstName',
    numeric: false,
    disablePadding: false,
    label: 'First Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'mobile',
    numeric: false,
    disablePadding: false,
    label: 'Mobile',
  },
  {
    id: 'role',
    numeric: false,
    disablePadding: false,
    label: 'Role',
  },
  {
    id: 'office',
    numeric: false,
    disablePadding: false,
    label: 'Office',
  },
  {
    id: 'department',
    numeric: false,
    disablePadding: true,
    label: 'Department',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: true,
    label: 'Action',
  },
];

interface ViewAllPresentationProp {
  rowsData: Employee[];
  handleDeleteRow: (
    rowId: number,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ) => MouseEventHandler<HTMLButtonElement>;
  handleDeleteRows: (
    selected: readonly number[],
    setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ) => MouseEventHandler<HTMLButtonElement>;
}

export const ViewAllPresentation: React.FC<ViewAllPresentationProp> = ({
  rowsData,
  handleDeleteRow,
  handleDeleteRows,
}) => {
  const actionButtonLinks = {
    view: `/employees/viewOne`,
    edit: `/employees/edit`,
  };
  return (
    <Fragment>
      <PageHeader
        title={EmployeesViewPageText.PageHeader}
        subtitle={EmployeesViewPageText.PageSubHeader}
        isButton={true}
        buttonText={EmployeesViewPageText.ButtonCreate}
        buttonHref="/employees/create"
      />
      <Table<Employee>
        actionButtonLinks={actionButtonLinks}
        title={EmployeesViewPageText.TableHeader}
        rowsData={rowsData}
        headCells={headCells}
        handleDeleteRow={handleDeleteRow}
        handleDeleteRows={handleDeleteRows}
        minWidth="850px"
      />
    </Fragment>
  );
};
