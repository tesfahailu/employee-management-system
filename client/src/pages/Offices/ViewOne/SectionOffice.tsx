import React from 'react';
import { OfficeViewPageText } from '../../../text';
import { CardStyledDisplay } from '../../../modules/components/CardStyledDisplay';
import { address } from './services';

export const SectionOffice = () => (
  <CardStyledDisplay
    headerText={OfficeViewPageText.OfficeAddress}
    buttonText={OfficeViewPageText.ButtonEdit}
    onEditButtonClick={() => {}}
    data={address}
  />
);
