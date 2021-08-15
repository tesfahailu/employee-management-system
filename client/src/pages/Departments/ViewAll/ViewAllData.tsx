import React, { MouseEventHandler } from 'react';
import { useState } from 'react';
import { rows } from './testData';
import { ViewAllPresentation } from './ViewAllPresentation';

export const ViewAllData = () => {
  const [rowsData, setRowsData] = useState(rows);

  const handleRemoveRow =
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

  return (
    <ViewAllPresentation
      rowsData={rowsData}
      handleRemoveRow={handleRemoveRow}
    />
  );
};
