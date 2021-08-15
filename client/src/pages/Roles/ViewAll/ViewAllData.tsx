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
    (rowId: number): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.stopPropagation();
      setRowsData((previousRowsData) => {
        const findIndex = previousRowsData.findIndex((row) => row.id === rowId);
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
    ): MouseEventHandler<HTMLButtonElement> =>
    (event) => {
      event.stopPropagation();
      setSelected([]);
      setRowsData([]);
    };

  return (
    <ViewAllPresentation
      rowsData={rowsData}
      handleDeleteRow={handleDeleteRow}
      handleDeleteRows={handleDeleteRows}
    />
  );
};
