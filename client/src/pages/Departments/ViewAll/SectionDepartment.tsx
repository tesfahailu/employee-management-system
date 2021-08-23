import React, { Fragment, MouseEventHandler, useState } from 'react';
import { DepartmentsViewPageText } from '../../../text';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import Table from '../../../modules/components/Table';
import { Role, HeadCell } from '../../../types/types';
import { rows } from './services';

const headCells: Array<HeadCell<Role>> = [
  {
    id: 'title',
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
    id: 'action',
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
    <Fragment>
      <SectionHeader
        title={DepartmentsViewPageText.PageHeader}
        subtitle={DepartmentsViewPageText.PageSubHeader}
        isButton={true}
        buttonText={DepartmentsViewPageText.ButtonCreate}
        buttonHref="/departments/create"
      />
      <Table<Role>
        actionButtonLinks={actionButtonLinks}
        title={DepartmentsViewPageText.TableHeader}
        rowsData={rowsData}
        handleDeleteRow={handleDeleteRow}
        handleDeleteRows={handleDeleteRows}
        headCells={headCells}
        minWidth="850px"
      />
    </Fragment>
  );
};
