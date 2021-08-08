import React from 'react';
import { ViewOnePresentation } from './ViewOnePresentation';

export const ViewOneData = () => {
  const role = { id: 1, name: 'limited', description: 'temporary access' };

  const { id, ...spreadRole } = role;
  return <ViewOnePresentation role={spreadRole} />;
};
