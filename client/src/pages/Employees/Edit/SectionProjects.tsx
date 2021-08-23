import React, { useEffect, useState } from 'react';
import { FormProjectsList } from '../../../modules/components/FormProjectsList';
import { OnMouseClick, Project } from '../../../types/types';
import { projectsList } from './services';

export const SectionProjects = () => {
  const [projects, setProjects] = useState([
    { id: 0, name: '', description: '' },
  ]);
  const [open, setOpen] = useState(false);

  const onProjectAdd: OnMouseClick = (id) => (_) => {
    setOpen(false);
    const projectToAdd = projectsList.find((project) => project.id === id)!;
    setProjects((previousProjects) => {
      return [...previousProjects, { ...projectToAdd }];
    });
  };

  const onProjectRemove: OnMouseClick = (id) => (_) => {
    setProjects((previousProjects) => {
      const index = previousProjects.findIndex((project) => project.id === id);
      const prevProjects = previousProjects.splice(0, index);
      const postProjects = previousProjects.splice(index + 1);
      return [...prevProjects, ...postProjects];
    });
  };

  useEffect(() => {
    setProjects([
      { id: 0, name: 'Amazon', description: 'Integrate with AWS' },
      { id: 0, name: 'Microsoft', description: 'Integrate with Azure' },
    ]);
  }, []);
  return (
    <FormProjectsList
      projects={projects}
      open={open}
      setOpen={setOpen}
      onProjectAdd={onProjectAdd}
      onProjectRemove={onProjectRemove}
      projectsList={projectsList}
    />
  );
};
