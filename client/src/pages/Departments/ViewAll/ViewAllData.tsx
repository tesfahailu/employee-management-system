import React, { MouseEventHandler } from 'react';
import { useState } from 'react';
import { rows } from './testData';
import { ViewAllPresentation } from './ViewAllPresentation';

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
