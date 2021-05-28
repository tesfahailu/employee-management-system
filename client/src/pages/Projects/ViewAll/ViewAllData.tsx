import React from 'react';
import { ViewAllPresentation } from '../../Projects/ViewAll/ViewAllPresentation';

export const ViewAllData = () => {
  const rowsData = [
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
  return <ViewAllPresentation rowsData={rowsData} />;
};
