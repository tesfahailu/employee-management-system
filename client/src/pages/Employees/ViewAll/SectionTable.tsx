import React, { useState } from 'react';
import { rows } from './services';
import {
  Employee,
  HandleDeleteRow,
  HandleDeleteRows,
  HeadCell,
} from '../../../types/types';
import { EmployeesViewPageText } from '../../../text';
import Table from '../../../modules/components/Table';

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

const actionButtonLinks = {
  view: `/employees/viewOne`,
  edit: `/employees/edit`,
};

export const SectionTable = () => {
  const [rowsData, setRowsData] = useState(rows);

  const handleDeleteRow: HandleDeleteRow =
    (rowId, setOpen, setOpenSnackBar) => (event) => {
      event.stopPropagation();
      setOpen(false);
      setRowsData((previousRowsData) => {
        const findIndex = previousRowsData.findIndex((row) => row.id === rowId);
        if (findIndex === -1) return previousRowsData;
        if (previousRowsData.length === 1) return [];
        const beforeSplit = previousRowsData.slice(0, findIndex);
        const afterSplit = previousRowsData.slice(findIndex + 1);
        return [...beforeSplit, ...afterSplit];
      });
      setOpenSnackBar({ open: true, success: true });
    };

  const handleDeleteRows: HandleDeleteRows =
    (selected, setSelected, setOpen, setOpenSnackBar) => (event) => {
      setOpen(false);
      event.stopPropagation();
      setSelected([]);
      setRowsData((prevData) => {
        return prevData.filter((val) => selected.indexOf(val.id) === -1);
      });
      setOpenSnackBar({ open: true, success: true });
    };
  return (
    <Table<Employee>
      actionButtonLinks={actionButtonLinks}
      title={EmployeesViewPageText.TableHeader}
      rowsData={rowsData}
      headCells={headCells}
      handleDeleteRow={handleDeleteRow}
      handleDeleteRows={handleDeleteRows}
      minWidth="850px"
    />
  );
};
