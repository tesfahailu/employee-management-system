import {
  Box,
  Card,
  CardContent,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Address, AddressForm } from '../../types/types';
import { EmployeeEditPageText, FormEmployeeAddressText } from '../../text';

const countries = [{ value: 'USA', text: 'USA' }];
const states = [
  { value: 'MA', text: 'Massachusetts' },
  { value: 'NY', text: 'New York' },
];

export const FormEmployeeAddress = ({
  address,
  addressErrors,
  onAddressChange,
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
        <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
          <InputLabel htmlFor="outlined-state-native-simple">
            {FormEmployeeAddressText.State}
          </InputLabel>
          <Select
            name="state"
            native
            displayEmpty={true}
            value={address.state}
            onChange={onAddressChange}
            label={FormEmployeeAddressText.State}
            inputProps={{
              name: 'state',
              id: 'outlined-state-native-simple',
              error: !!addressErrors.state,
              helperText: addressErrors.state,
            }}
          >
            <option aria-label="None" value="" />
            {states.map(({ value, text }, index) => (
              <option value={value} key={`text-${index}`}>
                {text}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
          <InputLabel htmlFor="outlined-country-native-simple">
            {FormEmployeeAddressText.Country}
          </InputLabel>
          <Select
            name="country"
            native
            displayEmpty={true}
            value={address.country}
            onChange={onAddressChange}
            label={FormEmployeeAddressText.Country}
            inputProps={{
              name: 'country',
              id: 'outlined-country-native-simple',
            }}
          >
            <option aria-label="None" value="" />
            {countries.map(({ value, text }, index) => (
              <option value={value} key={`text-${index}`}>
                {text}
              </option>
            ))}
          </Select>
        </FormControl>
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
