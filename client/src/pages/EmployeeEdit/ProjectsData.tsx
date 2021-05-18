import React, { useEffect, useState } from 'react';
import { employeeData } from '../EmployeeView/testData';
import { ProjectsPresentation } from './ProjectsPresentation';

export const ProjectsData: React.FC = ({}) => {
  const [projects, setProjects] = useState([
    { id: 0, name: '', description: '' },
  ]);

  const remoteProjectData = employeeData.employee.projects!.map((project) => ({
    id: project?.id!,
    name: project?.name!,
    description: project?.description!,
  }));

  useEffect(() => {
    setProjects(remoteProjectData);
  }, []);

  return <ProjectsPresentation projects={projects} />;
};
