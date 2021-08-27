import { Box, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { countriesList, statesList } from '../../pages/Employees/Edit/services';
import { EmployeeEditPageText, FormAddressText } from '../../text';
import { Address, FormAddress } from '../../types/types';
import { SelectComponent } from './SelectComponent';

export const FormOffice = ({
  address,
  errors,
  onChange,
  onErrorChange,
}: FormAddress<Omit<Address, 'id'>>) => (
  <Paper sx={{ mb: 2, p: 2 }}>
    <Typography variant="h6">{EmployeeEditPageText.OfficeeAddress}</Typography>
    <Box sx={{ mt: 2 }} />
    <TextField
      name="streetAddress1"
      margin="normal"
      fullWidth
      id="streetAddress1"
      label={FormAddressText.StreetAddress1}
      value={address.streetAddress1}
      onChange={onChange}
      onBlur={onErrorChange}
      error={!!errors.streetAddress1}
      helperText={errors.streetAddress1}
    />
    <TextField
      name="streetAddress2"
      margin="normal"
      fullWidth
      id="streetAddress2"
      label={FormAddressText.StreetAddress2}
      value={address.streetAddress2}
      onChange={onChange}
      onBlur={onErrorChange}
      error={!!errors.streetAddress2}
      helperText={errors.streetAddress2}
    />
    <TextField
      name="city"
      margin="normal"
      fullWidth
      id="city"
      label={FormAddressText.City}
      value={address.city}
      onChange={onChange}
      onBlur={onErrorChange}
      error={!!errors.city}
      helperText={errors.city}
    />
    <SelectComponent
      name="state"
      labelText={FormAddressText.State}
      onChange={onChange}
      onErrorChange={onErrorChange}
      value={address.state}
      options={statesList}
      error={errors.state}
    />
    <SelectComponent
      name="country"
      labelText={FormAddressText.Country}
      onChange={onChange}
      onErrorChange={onErrorChange}
      value={address.country}
      options={countriesList}
      error={errors.country}
    />
    <TextField
      name="zipCode"
      margin="normal"
      fullWidth
      id="zipCode"
      label={FormAddressText.ZipCode}
      value={address.zipCode}
      onChange={onChange}
      onBlur={onErrorChange}
      error={!!errors.zipCode}
      helperText={errors.zipCode}
    />
  </Paper>
);
