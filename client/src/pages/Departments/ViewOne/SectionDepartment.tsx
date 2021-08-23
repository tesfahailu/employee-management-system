import React, { useEffect, useState } from 'react';
import { DepartmentViewPageText } from '../../../text';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';

export const SectionDepartment = () => {
  const [department, setDepartment] = useState({
    name: '',
    description: '',
  });
  useEffect(() => {
    setDepartment({
      name: 'Human Resources',
      description: 'getting people fired',
    });
  }, []);
  return (
    <CardStyledDisplay
      headerText={DepartmentViewPageText.Department}
      buttonText={DepartmentViewPageText.ButtonEdit}
      onEditButtonClick={() => {}}
      data={department}
    />
  );
};
