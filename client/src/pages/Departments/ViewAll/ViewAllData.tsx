import React from 'react';
import { rows } from './testData';
import { ViewAllPresentation } from './ViewAllPresentation';

export const ViewAllData = () => {
  const rowsData = rows;
  return <ViewAllPresentation rowsData={rowsData} />;
};
