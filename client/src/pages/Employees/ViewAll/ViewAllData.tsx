import React, { MouseEventHandler, useState } from 'react';
import { ViewAllPresentation } from './ViewAllPresentation';
import { rows } from './testData';

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
