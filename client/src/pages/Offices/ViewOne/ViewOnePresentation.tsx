import React, { Fragment } from 'react';
import { ViewOfficePageText } from '../../../text';
import { CreateAddressType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { CardFormatted } from '../../../modules/components/CardFormatted';

interface ViewOnePresentationProps {
  address: CreateAddressType;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  address,
}) => {
  return (
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
};
