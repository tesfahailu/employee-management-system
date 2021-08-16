import React, { MouseEventHandler } from 'react';
import { useState } from 'react';
import { ViewAllPresentation } from './ViewAllPresentation';

export interface Rows {
  id: number;
  name: string;
  description: string | null;
}

const rows: Array<Rows> = [
  {
    id: 1,
    name: 'admin',
    description: 'can view, edit, and delete all resources',
  },

  {
    id: 2,
    name: 'basic',
    description: 'can view, edit, and delete own resources',
  },
];

export const ViewAllData = () => {
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
    <ViewAllPresentation
      rowsData={rowsData}
      handleDeleteRow={handleDeleteRow}
      handleDeleteRows={handleDeleteRows}
    />
  );
};
