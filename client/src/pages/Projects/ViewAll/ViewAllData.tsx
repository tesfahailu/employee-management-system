import React from 'react';
import { ViewAllPresentation } from '../../Projects/ViewAll/ViewAllPresentation';

export interface Rows {
  id: number;
  name: string;
  description: string | null;
}

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

export const ViewAllData = () => {
  return <ViewAllPresentation rowsData={rowsData} />;
};
