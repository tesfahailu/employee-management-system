import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { EditOfficePageText } from '../../../text';
import { EditOfficeAddressType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormOffice } from '../../../modules/components/FormOffice';

const countries = [{ value: 'USA', text: 'USA' }];
const states = [
  { value: 'MA', text: 'Massachusetts' },
  { value: 'NY', text: 'New York' },
];

export const EditPresentation = ({
  address,
  onAddressChange,
  isFormChanged,
  saveChanges,
}: EditOfficeAddressType) => (
  <Fragment>
    <PageHeader
      title={EditOfficePageText.PageHeaderText}
      subtitle={EditOfficePageText.PageSubHeaderText}
      isButton={false}
    />
    <FormOffice address={address} onAddressChange={onAddressChange} />
    <Button
      sx={{ mr: 1, mb: 1 }}
      disabled={!isFormChanged}
      onClick={saveChanges}
    >
      {EditOfficePageText.SaveButtonText}
    </Button>
  </Fragment>
);
