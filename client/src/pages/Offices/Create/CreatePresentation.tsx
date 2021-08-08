import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { CreateOfficePageText } from '../../../text';
import { CreateOfficeAddressType } from '../../../types/types';
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
}: CreateOfficeAddressType) => (
  <Fragment>
    <PageHeader
      title={CreateOfficePageText.PageHeaderText}
      subtitle={CreateOfficePageText.PageSubHeaderText}
      isButton={false}
    />
    <FormOffice address={address} onAddressChange={onAddressChange} />
    <Button
      sx={{ mr: 1, mb: 1 }}
      disabled={!isFormComplete}
      onClick={saveChanges}
    >
      {CreateOfficePageText.SaveButtonText}
    </Button>
  </Fragment>
);
