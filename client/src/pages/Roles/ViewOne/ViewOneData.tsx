import React, { useEffect, useState } from 'react';
import { ViewOnePresentation } from './ViewOnePresentation';

interface ViewOneDataProps {}

export const ViewOneData: React.FC<ViewOneDataProps> = ({}) => {
  const role = { id: 1, name: 'limited', description: 'temporary access' };

  const { id, ...spreadRole } = role;
  return <ViewOnePresentation role={spreadRole} />;
};
