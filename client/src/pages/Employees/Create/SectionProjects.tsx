import React, { useState } from 'react';
import { FormProjectsList } from '../../../modules/components/FormProjectsList';
import { OnMouseClick, ProjectWithId } from '../../../types/types';
import { projectsList } from './services';

export const SectionProjects = () => {
  const [projects, setProjects] = useState<ProjectWithId[]>([]);
  const [open, setOpen] = useState(false);

  const onProjectAdd: OnMouseClick = (id) => (_) => {
    setOpen(false);
    const projectToAdd = projectsList.find((project) => project.id === id)!;
    setProjects((project) => {
      return [...project, { ...projectToAdd }];
    });
  };
  const onProjectRemove: OnMouseClick = (id) => (_) => {
    setProjects((project) => {
      const index = project.findIndex((project) => project.id === id);
      const leftArr = project.splice(0, index);
      const rightArr = project.splice(index + 1);
      return [...leftArr, ...rightArr];
    });
  };
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
