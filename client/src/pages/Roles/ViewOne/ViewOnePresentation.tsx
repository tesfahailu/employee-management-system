import React, { Fragment } from 'react';
import { RoleViewPageText } from '../../../text';
import { Role } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';

interface ViewOnePresentationProps {
  role: Omit<Role, 'id'>;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  role,
}) => (
  <Fragment>
    <PageHeader
      title={RoleViewPageText.PageHeader}
      subtitle={RoleViewPageText.PageSubHeader}
      isButton={false}
    />
    <CardStyledDisplay
      headerText={RoleViewPageText.Role}
      buttonText={RoleViewPageText.ButtonEdit}
      onEditButtonClick={() => {}}
      data={role}
    />
  </Fragment>
);
