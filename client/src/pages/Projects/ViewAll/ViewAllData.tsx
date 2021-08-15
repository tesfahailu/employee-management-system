import React, { MouseEventHandler, useState } from 'react';
import { Project } from '../../../types/types';
import { ViewAllPresentation } from '../../Projects/ViewAll/ViewAllPresentation';

export interface Rows {
  id: number;
  name: string;
  description: string | null;
}

const data: Project[] = [
  {
    id: 1,
    name: 'Amazon',
    description: 'We made it',
  },

  {
    id: 2,
    name: 'Microsoft',
    description: 'No we did it',
  },
];

export const ViewAllData = () => {
  const [rowsData, setRowsData] = useState(data);

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
