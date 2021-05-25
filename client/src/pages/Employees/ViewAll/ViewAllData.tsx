import React from 'react';
import { useUsersQuery } from '../../../generated/graphql';
import { ViewAllPresentation } from './ViewAllPresentation';
import { rows } from './testData';

interface ViewAllDataProps {
  isAboveMinWidth: boolean;
}

export const ViewAllData: React.FC<ViewAllDataProps> = ({
  isAboveMinWidth,
}) => {
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' });
  if (!data) return <div>...loading</div>;
  const rowsData = rows;

  return (
    <ViewAllPresentation
      rowsData={rowsData}
      isAboveMinWidth={isAboveMinWidth}
    />
  );
};
