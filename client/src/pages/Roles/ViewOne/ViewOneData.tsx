import React, { useEffect, useState } from 'react';
import { ViewOnePresentation } from './ViewOnePresentation';

interface ViewOneDataProps {}

export const ViewOneData: React.FC<ViewOneDataProps> = ({}) => {
  const [role, setRole] = useState({
    id: 0,
    name: '',
    description: '',
  });

  useEffect(() => {
    setRole({ id: 1, name: 'limited', description: 'temporary access' });
  }, []);

  return <ViewOnePresentation role={role} />;
};
