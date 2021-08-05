import React, { useEffect, useState } from 'react';
import { ViewOnePresentation } from '../../Projects/ViewOne/ViewOnePresentation';

export const ViewOneData = () => {
  const project = { id: 1, name: 'Amazon', description: 'Going' };
  const { id, ...spreadProject } = project;

  return <ViewOnePresentation project={spreadProject} />;
};
