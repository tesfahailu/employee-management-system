import React, { useEffect, useState } from 'react';
import { ViewOnePresentation } from '../../Projects/ViewOne/ViewOnePresentation';

export const ViewOneData = () => {
  const [project, setProject] = useState({ id: 0, name: '', description: '' });

  useEffect(() => {
    setProject({ id: 1, name: 'Amazon', description: 'Going' });
  }, []);

  return <ViewOnePresentation project={project} />;
};
