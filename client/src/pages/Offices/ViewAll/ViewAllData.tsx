import React, { MouseEventHandler, useState } from 'react';
import { Address } from '../../../types/types';
import { ViewAllPresentation } from './ViewAllPresentation';

const rows: Address[] = [
  {
    id: 1,
    streetAddress1: '121 E. Cream St.',
    streetAddress2: 'Apt. 1',
    city: 'Cambridge',
    state: 'MA',
    country: 'USA',
    zipCode: '45625',
  },
  {
    id: 2,
    streetAddress1: '565 Cramer St.',
    streetAddress2: 'Apt. 5',
    city: 'Chicago',
    state: 'New York',
    country: 'USA',
    zipCode: '65784',
  },
];

export const ViewAllData: React.FC = () => {
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
