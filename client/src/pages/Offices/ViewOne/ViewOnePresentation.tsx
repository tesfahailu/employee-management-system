import React, { Fragment } from 'react';
import { OfficeViewPageText } from '../../../text';
import { Address } from '../../../types/types';
import { SectionHeader } from '../../../modules/components/SectionHeader';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';

interface ViewOnePresentationProps {
  address: Omit<Address, 'id'>;
}

export const ViewOnePresentation: React.FC<ViewOnePresentationProps> = ({
  address,
}) => (
  <Fragment>
    <SectionHeader
      title={OfficeViewPageText.PageHeader}
      subtitle={OfficeViewPageText.PageSubHeader}
      isButton={false}
    />
    <CardStyledDisplay
      headerText={OfficeViewPageText.OfficeAddress}
      buttonText={OfficeViewPageText.ButtonEdit}
      onEditButtonClick={() => {}}
      data={address}
    />
  </Fragment>
);
