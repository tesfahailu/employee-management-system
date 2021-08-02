import React from 'react';
import { useUsersQuery } from '../../../generated/graphql';
import { ViewAllPresentation } from './ViewAllPresentation';
import { rows } from './testData';

export const ViewAllData = () => {
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' });
  if (!data) return <div>...loading</div>;
  const rowsData = rows;

  return <ViewAllPresentation rowsData={rowsData} />;
};
