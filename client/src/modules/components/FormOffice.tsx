import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { EmployeeEditPageText } from '../../text';
import { Address, AddressForm } from '../../types/types';

const countries = [{ value: 'USA', text: 'USA' }];
const states = [
  { value: 'MA', text: 'Massachusetts' },
  { value: 'NY', text: 'New York' },
];

export const FormOffice = ({
  address,
  onChange,
  onErrorChange,
}: AddressForm<Omit<Address, 'id'>>) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h6">
        {EmployeeEditPageText.OfficeeAddress}
      </Typography>
      <Box sx={{ mt: 2 }}>
        <TextField
          name="streetAddress1"
          margin="normal"
          fullWidth
          id="oStreetAddress1"
          label="Street Address 1:"
          value={address.streetAddress1}
          onChange={onChange}
        />
        <TextField
          name="streetAddress2"
          margin="normal"
          fullWidth
          id="oStreetAddress2"
          label="Street Address 2:"
          value={address.streetAddress2}
          onChange={onChange}
        />
        <TextField
          name="city"
          margin="normal"
          fullWidth
          id="oCity"
          label="City:"
          value={address.city}
          onChange={onChange}
        />
        <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
          <InputLabel htmlFor="outlined-state-native-simple">State:</InputLabel>
          <Select
            name="state"
            native
            value={address.state}
            onChange={onChange}
            label="Statee"
            inputProps={{
              name: 'type',
              id: 'outlined-state-native-simple',
            }}
          >
            {states.map(({ value, text }, index) => (
              <option value={value} key={`${value}-${index}`}>
                {text}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ mt: 2, mb: 1 }} fullWidth>
          <InputLabel htmlFor="outlined-country-native-simple">
            Country:
          </InputLabel>
          <Select
            name="country"
            native
            value={address.country}
            onChange={onChange}
            label="Country"
            inputProps={{
              name: 'type',
              id: 'outlined-country-native-simple',
            }}
          >
            {countries.map(({ value, text }, index) => (
              <option value={value} key={`${value}-${index}`}>
                {text}
              </option>
            ))}
          </Select>
        </FormControl>
        <TextField
          name="zipCode"
          margin="normal"
          fullWidth
          id="oZipCode"
          label="Zip Code:"
          value={address.zipCode}
          onChange={onChange}
        />
      </Box>
    </CardContent>
  </Card>
);
