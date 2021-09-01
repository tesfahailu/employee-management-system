import React, { MouseEventHandler, useState } from 'react';
import { DepartmentsViewPageText } from '../../../text';
import Table from '../../../modules/components/Table';
import {
  HeadCell,
  OnChangeSelect,
  HandleSelectRow,
  Department,
  DepartmentWithId,
} from '../../../types/types';
import { rows } from './services';
import { GeneralErrorText as ErrorText } from '../../../text';

const headCells: Array<HeadCell<Department>> = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Title',
  },
  {
    id: 'description',
    numeric: false,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'actions',
    numeric: false,
    disablePadding: true,
    label: 'Actions',
  },
];

const actionButtonLinks = {
  view: `/departments/viewOne`,
  edit: `/departments/edit`,
};

export const SectionDepartment = () => {
  const [rowsData, setRowsData] = useState(rows);

  const [editableRow, setEditableRow] = useState<DepartmentWithId>({
    id: -1,
    name: '',
    description: '',
  });
  const onEditRowChange: OnChangeSelect = (event) => {
    event.stopPropagation();
    const { name, value } = event.target;
    setEditableRow((row) => ({
      ...row,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState<Department>({
    name: '',
    description: '',
  });
  const onErrorChange: OnChangeSelect = (event) => {
    const { name, value } = event.target;
    let errorText = '';

    switch (name) {
      case 'name':
        errorText = value === '' ? ErrorText.FieldEmpty : '';
        break;
    }

    setErrors((error) => {
      return {
        ...error,
        [name]: errorText,
      };
    });
  };

  const handleEditRow: HandleSelectRow<DepartmentWithId> = (event, row) => {
    event.stopPropagation();
    setEditableRow(row);
  };

  const handleSaveRow: HandleSelectRow<DepartmentWithId> = (event, row) => {
    event.stopPropagation();
    console.log('save row change');
  };

  const handleCancelRow: HandleSelectRow<DepartmentWithId> = (event, row) => {
    event.stopPropagation();
    console.log('cancel row change');
  };

  const handleDeleteRow =
    (
      rowId: number,
      setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    ): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
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
    };

  const handleDeleteRows =
    (
      selected: readonly number[],
      setSelected: React.Dispatch<React.SetStateAction<readonly number[]>>,
      setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    ): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      setOpen(false);
      event.stopPropagation();
      setSelected([]);
      setRowsData((prevData) => {
        return prevData.filter((val) => selected.indexOf(val.id) === -1);
      });
    };

  return (
    <Table<DepartmentWithId, Department>
      actionButtonLinks={actionButtonLinks}
      title={DepartmentsViewPageText.TableHeader}
      isRowsEditable={true}
      rowsData={rowsData}
      editableRow={editableRow}
      onEditRowChange={onEditRowChange}
      errors={errors}
      onErrorChange={onErrorChange}
      handleEditRow={handleEditRow}
      handleSaveRow={handleSaveRow}
      handleCancelRow={handleCancelRow}
      handleDeleteRow={handleDeleteRow}
      handleDeleteRows={handleDeleteRows}
      headCells={headCells}
      minWidth="850px"
    />
  );
};
