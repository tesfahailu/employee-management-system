import React, { ChangeEvent, useEffect, useState } from 'react';
import { OnChangeField, Project } from '../../../types/types';
import { EditPresentation } from '../../Projects/Edit/EditPresentation';

export const EditData = () => {
  const [project, setProject] = useState({
    id: 0,
    name: '',
    description: '',
  });
  const [isFormChanged, setIsFormChanged] = useState(false);

  const dataProject = { id: 1, name: 'Amazon', description: 'sdfadf' };
  useEffect(() => {
    setProject(dataProject);
  }, []);

  const onProjectChange: OnChangeField<Project> = (field) => (event) => {
    setIsFormChanged(true);
    setProject((previousProject) => {
      return { ...previousProject, [field]: event.target.value };
    });
  };

  const saveChanges = () => {
    setIsFormChanged(false);
  };

  return (
    <EditPresentation
      project={project}
      onProjectChange={onProjectChange}
      isFormChanged={isFormChanged}
      saveChanges={saveChanges}
    />
  );
};
