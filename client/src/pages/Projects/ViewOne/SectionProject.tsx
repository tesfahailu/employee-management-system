import React from 'react';
import { ProjectViewPageText } from '../../../text';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';
import { project } from './services';

export const SectionProject = () => (
  <CardStyledDisplay
    headerText={ProjectViewPageText.Project}
    buttonText={ProjectViewPageText.ButtonEdit}
    onEditButtonClick={() => {}}
    data={project}
  />
);
