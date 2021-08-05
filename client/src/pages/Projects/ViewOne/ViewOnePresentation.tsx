import React, { Fragment } from 'react';
import { ViewProjectPageText } from '../../../text';
import { LimitedProjectType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardFormatted } from '../../../modules/components/CardFormatted';

interface ViewOnePresentationProps {
  project: LimitedProjectType;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  project,
}) => (
  <Fragment>
    <Fragment>
      <PageHeader
        title={ViewProjectPageText.PageHeaderText}
        subtitle={ViewProjectPageText.PageSubHeaderText}
        isButton={false}
      />
      <CardFormatted
        headerText={ViewProjectPageText.ProjectText}
        buttonText={ViewProjectPageText.EditButtonText}
        onEditButtonClick={() => {}}
        data={project}
      />
    </Fragment>
  </Fragment>
);
