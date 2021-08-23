import React, { ChangeEvent, useState } from 'react';
import { OnChangeField } from '../../../types/types';
import { FormProject } from '../../../modules/components/FormProject';

export const SectionProject = () => {
  const [project, setProject] = useState({
    id: 0,
    name: '',
    description: '',
  });

  const onProjectChange: OnChangeField = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setProject((previousProject) => {
      return { ...previousProject, [name]: value };
    });
  };

  return <FormProject project={project} onProjectChange={onProjectChange} />;
};
