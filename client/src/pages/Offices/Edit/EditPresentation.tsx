import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { OfficeEditPageText } from '../../../text';
import { OfficePageEdit } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormOffice } from '../../../modules/components/FormOffice';

const countries = [{ value: 'USA', text: 'USA' }];
const states = [
  { value: 'MA', text: 'Massachusetts' },
  { value: 'NY', text: 'New York' },
];

export const EditPresentation = ({
  address,
  addressErrors,
  onAddressChange,
  isFormChanged,
  saveChanges,
}: OfficePageEdit) => (
  <Fragment>
    <PageHeader
      title={OfficeEditPageText.PageHeader}
      subtitle={OfficeEditPageText.PageSubHeader}
      isButton={false}
    />
    <FormOffice
      address={address}
      addressErrors={addressErrors}
      onAddressChange={onAddressChange}
    />
    <Button
      sx={{ mr: 1, mb: 1 }}
      disabled={!isFormChanged}
      onClick={saveChanges}
    >
      {OfficeEditPageText.ButtonSave}
    </Button>
  </Fragment>
);
