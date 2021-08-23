import React, { useEffect, useState } from 'react';
import { FormProject } from '../../../modules/components/FormProject';
import { OnChangeField } from '../../../types/types';
import { dataProject } from './services';

export const SectionProject = () => {
  const [project, setProject] = useState({
    id: 0,
    name: '',
    description: '',
  });

  useEffect(() => {
    setProject(dataProject);
  }, []);

  const onProjectChange: OnChangeField = (event) => {
    const { name, value } = event.target;
    // setIsFormChanged(true);
    setProject((previousProject) => {
      return { ...previousProject, [name]: value };
    });
  };

  return <FormProject project={project} onProjectChange={onProjectChange} />;
};
