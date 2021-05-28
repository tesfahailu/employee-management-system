import React from 'react';
import { ViewAllPresentation } from './ViewAllPresentation';

interface ViewAllDataProps {}

export const ViewAllData: React.FC<ViewAllDataProps> = ({}) => {
  const rowsData = [
    {
      id: 1,
      title: 'marketing',
      description:
        'assists a business with creating, implementing, and sustaining marketing strategie.',
    },

    {
      id: 2,
      title: 'operations',
      description:
        'responsible for the effective and successful management of labor, productivity, quality control and safety measures.',
    },
  ];
  return <ViewAllPresentation rowsData={rowsData} />;
};
