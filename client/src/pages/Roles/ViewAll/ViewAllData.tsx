import React from 'react';
import { ViewAllPresentation } from './ViewAllPresentation';

export interface Rows {
  id: number;
  name: string;
  description: string | null;
}

const rowsData: Array<Rows> = [
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

export const ViewAllData = () => {
  return <ViewAllPresentation rowsData={rowsData} />;
};
