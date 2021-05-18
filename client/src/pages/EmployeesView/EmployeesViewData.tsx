import React from 'react';
import { useUsersQuery } from '../../generated/graphql';
import { EmployeesViewPresentation } from './EmployeesViewPresentation';
import { rows } from './testData';

interface EmployeesViewDataProps {
  isAboveMinWidth: boolean;
}

export const EmployeesViewData: React.FC<EmployeesViewDataProps> = ({
  isAboveMinWidth,
}) => {
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' });
  if (!data) return <div>...loading</div>;
  const rowsData = rows;
  return (
    <EmployeesViewPresentation
      rowsData={rowsData}
      isAboveMinWidth={isAboveMinWidth}
    />
  );
};
