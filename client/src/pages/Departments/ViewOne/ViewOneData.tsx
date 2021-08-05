import React, { useEffect, useState } from 'react';
import { ViewOnePresentation } from './ViewOnePresentation';

export const ViewOneData = () => {
  const [department, setDepartment] = useState({
    title: '',
    description: '',
  });
  useEffect(() => {
    setDepartment({
      title: 'Human Resources',
      description: 'getting people fired',
    });
  }, []);
  return <ViewOnePresentation department={department} />;
};
