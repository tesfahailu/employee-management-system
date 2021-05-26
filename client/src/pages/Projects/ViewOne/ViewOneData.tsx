import React from 'react';
import { ViewOnePresentation } from '../../Projects/ViewOne/ViewOnePresentation';

interface ViewOneDataProps {}

export const ViewOneData: React.FC<ViewOneDataProps> = ({}) => {
  const project = { id: 1, name: 'Amazon', description: 'Going' };
  return <ViewOnePresentation project={project} />;
};
