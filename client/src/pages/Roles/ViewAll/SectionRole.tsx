import React, { MouseEventHandler, useState } from 'react';
import { RolesViewPageText } from '../../../text';
import { HeadCell, Role, RoleWithId } from '../../../types/types';
import Table from '../../../modules/components/Table';
import { rows } from './services';

const columns: HeadCell<RoleWithId>[] = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
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
  view: `/roles/viewOne`,
  edit: `/roles/edit`,
};

export const SectionRole = () => {
  const [rowsData, setRowsData] = useState(rows);

  const handleDeleteRow =
    (
      rowId: number,
      setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    ): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.stopPropagation();
      setOpen(false);
      setRowsData((rowsData) => {
        const findIndex = rowsData.findIndex((row) => row.id === rowId);
        if (findIndex === -1) return rowsData;
        if (rowsData.length === 1) return [];
        const leftArr = rowsData.slice(0, findIndex);
        const rightArr = rowsData.slice(findIndex + 1);
        return [...leftArr, ...rightArr];
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
    <Table<RoleWithId, Role>
      actionButtonLinks={actionButtonLinks}
      title={RolesViewPageText.TableHeader}
      rowsData={rowsData}
      headCells={columns}
      handleDeleteRow={handleDeleteRow}
      handleDeleteRows={handleDeleteRows}
      minWidth="500px"
    />
  );
};
