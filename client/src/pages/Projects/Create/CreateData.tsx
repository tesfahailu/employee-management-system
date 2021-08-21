import React, { ChangeEvent, useState } from 'react';
import { OnChangeField, Project } from '../../../types/types';
import { CreatePresentation } from '../../Projects/Create/CreatePresentation';

export const CreateData = () => {
  const [project, setProject] = useState({
    id: 0,
    name: '',
    description: '',
  });
  const [isFormComplete, setIsFormComplete] = useState(false);

  const onProjectChange: OnChangeField = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setProject((previousProject) => {
      return { ...previousProject, [name]: value };
    });
  };

  const saveChanges = () => {
    console.log('Saved changes');
    setIsFormComplete(false);
  };

  return (
    <CreatePresentation
      project={project}
      onProjectChange={onProjectChange}
      isFormComplete={isFormComplete}
      saveChanges={saveChanges}
    />
  );
};
