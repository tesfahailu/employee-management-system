import React, { useState } from 'react';
import { ViewAllPresentation } from './ViewAllPresentation';

interface ViewAllDataProps {
  isAboveMinWidth: boolean;
}

export const ViewAllData: React.FC<ViewAllDataProps> = ({
  isAboveMinWidth,
}) => {
  const [employeeAddress, setEmployeeAddress] = useState([
    {
      streetAddress1: '',
      streetAddress2: '',
      city: '',
      state: '',
      country: '',
      zipCode: '',
    },
  ]);
  const rowsData = [
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

  return (
    <ViewAllPresentation
      rowsData={rowsData}
      isAboveMinWidth={isAboveMinWidth}
    />
  );
};
