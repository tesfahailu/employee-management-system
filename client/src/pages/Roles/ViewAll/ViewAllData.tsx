import React from 'react';
import { ViewAllPresentation } from './ViewAllPresentation';

export const ViewAllData = ({}) => {
  const rowsData = [
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
  return <ViewAllPresentation rowsData={rowsData} />;
};
