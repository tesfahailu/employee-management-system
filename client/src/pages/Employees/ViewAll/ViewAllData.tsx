import React, { MouseEventHandler, useState } from 'react';
import { ViewAllPresentation } from './ViewAllPresentation';
import { rows } from './testData';

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
