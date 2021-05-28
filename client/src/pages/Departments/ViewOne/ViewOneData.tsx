import React, { useEffect, useState } from 'react';
import { ViewOnePresentation } from './ViewOnePresentation';

export const ViewOneData = () => {
  const [department, setDepartment] = useState({
    id: 0,
    title: '',
    description: '',
  });
  useEffect(() => {
    setDepartment({
      id: 1,
      title: 'Human Resources',
      description: 'getting people fired',
    });
  }, []);
  return <ViewOnePresentation department={department} />;
};
