import React, { useEffect, useState } from 'react';
import { ViewOnePresentation } from './ViewOnePresentation';

export const ViewOneData = () => {
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
  return <ViewOnePresentation department={department} />;
};
