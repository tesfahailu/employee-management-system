import React, { Fragment } from 'react';
import { ViewOfficePageText } from '../../../text';
import { Address } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardFormatted } from '../../../modules/components/CardFormatted';

interface ViewOnePresentationProps {
  address: Omit<Address, 'id'>;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  address,
}) => (
  <Fragment>
    <PageHeader
      title={ViewOfficePageText.PageHeaderText}
      subtitle={ViewOfficePageText.PageSubHeaderText}
      isButton={false}
    />
    <CardFormatted
      headerText={ViewOfficePageText.OfficeAddressText}
      buttonText={ViewOfficePageText.EditButtonText}
      onEditButtonClick={() => {}}
      data={address}
    />
  </Fragment>
);
