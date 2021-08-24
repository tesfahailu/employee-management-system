import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Address, FormAddress } from '../../types/types';
import { FormEmployeeAddressText } from '../../text';
import { SelectComponent } from './SelectComponent';

export const FormEmployeeAddress = ({
  address,
  errors,
  onChange,
  onErrorChange,
  statesList,
  countriesList,
}: FormAddress<Omit<Address, 'id'>>) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">{FormEmployeeAddressText.Header}</Typography>
      <Box sx={{ mt: 2 }}>
        <TextField
          name="streetAddress1"
          margin="normal"
          fullWidth
          id="eStreetAddress1"
          label={FormEmployeeAddressText.StreetAddress1}
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
          id="eStreetAddress2"
          label={FormEmployeeAddressText.StreetAddress2}
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
          id="eCity"
          label={FormEmployeeAddressText.City}
          value={address.city}
          onChange={onChange}
          onBlur={onErrorChange}
          error={!!errors.city}
          helperText={errors.city}
        />
        <SelectComponent
          name="state"
          labelText={FormEmployeeAddressText.State}
          onChange={onChange}
          onErrorChange={onErrorChange}
          value={address.state}
          options={statesList}
          error={errors.state}
        />
        <SelectComponent
          name="country"
          labelText={FormEmployeeAddressText.Country}
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
          id="eZipCode"
          label={FormEmployeeAddressText.ZipCode}
          value={address.zipCode}
          onChange={onChange}
          onBlur={onErrorChange}
          error={!!errors.zipCode}
          helperText={errors.zipCode}
        />
      </Box>
    </CardContent>
  </Card>
);
