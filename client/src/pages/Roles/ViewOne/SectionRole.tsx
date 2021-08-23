import React from 'react';
import { RoleViewPageText } from '../../../text';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';
import { role } from './service';

export const SectionRole = () => {
  const { id, ...spreadRole } = role;
  return (
    <CardStyledDisplay
      headerText={RoleViewPageText.Role}
      buttonText={RoleViewPageText.ButtonEdit}
      onEditButtonClick={() => {}}
      data={role}
    />
  );
};
