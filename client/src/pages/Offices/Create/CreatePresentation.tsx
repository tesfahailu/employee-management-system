import { Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { OfficeCreatePageText } from '../../../text';
import { OfficePageCreate } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormOffice } from '../../../modules/components/FormOffice';

export const CreatePresentation = ({
  address,
  addressErrors,
  onAddressChange,
  statesList,
  countriesList,
  isFormComplete,
  saveChanges,
}: OfficePageCreate) => (
  <Fragment>
    <PageHeader
      title={OfficeCreatePageText.PageHeader}
      subtitle={OfficeCreatePageText.PageSubHeader}
      isButton={false}
    />
    <FormOffice
      address={address}
      addressErrors={addressErrors}
      onAddressChange={onAddressChange}
      statesList={statesList}
      countriesList={countriesList}
    />
    <Button
      sx={{ mr: 1, mb: 1 }}
      disabled={!isFormComplete}
      onClick={saveChanges}
    >
      {OfficeCreatePageText.ButtonSave}
    </Button>
  </Fragment>
);
