import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { OfficeCreatePageText } from '../../../text';
import { OfficePageCreate } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormOffice } from '../../../modules/components/FormOffice';

const countries = [{ value: 'USA', text: 'USA' }];
const states = [
  { value: 'MA', text: 'Massachusetts' },
  { value: 'NY', text: 'New York' },
];

export const CreatePresentation = ({
  address,
  onAddressChange,
  isFormComplete,
  saveChanges,
}: OfficePageCreate) => (
  <Fragment>
    <PageHeader
      title={OfficeCreatePageText.PageHeader}
      subtitle={OfficeCreatePageText.PageSubHeader}
      isButton={false}
    />
    <FormOffice address={address} onAddressChange={onAddressChange} />
    <Button
      sx={{ mr: 1, mb: 1 }}
      disabled={!isFormComplete}
      onClick={saveChanges}
    >
      {OfficeCreatePageText.ButtonSave}
    </Button>
  </Fragment>
);
