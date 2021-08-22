import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Address, AddressForm } from '../../types/types';
import { EmployeeEditPageText, FormEmployeeAddressText } from '../../text';
import { SelectComponent } from './SelectComponent';

export const FormEmployeeAddress = ({
  address,
  addressErrors,
  onAddressChange,
  statesList,
  countriesList,
}: AddressForm<Omit<Address, 'id'>>) => (
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
          onBlur={onAddressChange}
          error={!!addressErrors.streetAddress1}
          helperText={addressErrors.streetAddress1}
        />
        <TextField
          name="streetAddress2"
          margin="normal"
          fullWidth
          id="eStreetAddress2"
          label={FormEmployeeAddressText.StreetAddress2}
          onBlur={onAddressChange}
          error={!!addressErrors.streetAddress2}
          helperText={addressErrors.streetAddress2}
        />
        <TextField
          name="city"
          margin="normal"
          fullWidth
          id="eCity"
          label={FormEmployeeAddressText.City}
          onBlur={onAddressChange}
          error={!!addressErrors.city}
          helperText={addressErrors.city}
        />
        <SelectComponent
          name="state"
          labelText={FormEmployeeAddressText.State}
          onChange={onAddressChange}
          value={address.state}
          options={statesList}
          error={addressErrors.state}
        />
        <SelectComponent
          name="country"
          labelText={FormEmployeeAddressText.Country}
          onChange={onAddressChange}
          value={address.country}
          options={countriesList}
          error={addressErrors.country}
        />
        <TextField
          name="zipCode"
          margin="normal"
          fullWidth
          id="eZipCode"
          label={FormEmployeeAddressText.ZipCode}
          onBlur={onAddressChange}
          error={!!addressErrors.zipCode}
          helperText={addressErrors.zipCode}
        />
      </Box>
    </CardContent>
  </Card>
);
