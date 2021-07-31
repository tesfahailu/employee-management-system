import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React from 'react';
import { EditEmployeePageText } from '../../text';
import { EditAddressType } from '../../types/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginBottom: theme.spacing(2),
    },
    formControl: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  }),
);

export const OfficeAddressCard = ({
  address,
  onAddressChange,
}: EditAddressType) => {
  const classes = useStyles();
  const countries = [{ value: 'USA', text: 'USA' }];
  const states = [
    { value: 'MA', text: 'Massachusetts' },
    { value: 'NY', text: 'New York' },
  ];

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography variant="h6">
            {EditEmployeePageText.OfficeeAddressText}
          </Typography>
        }
      />
      <CardContent>
        <TextField
          margin="normal"
          fullWidth
          id="oStreetAddress1"
          label="Street Address 1:"
          value={address.streetAddress1}
          onChange={onAddressChange('streetAddress1')}
        />
        <TextField
          margin="normal"
          fullWidth
          id="oStreetAddress2"
          label="Street Address 2:"
          value={address.streetAddress2}
          onChange={onAddressChange('streetAddress2')}
        />
        <TextField
          margin="normal"
          fullWidth
          id="oCity"
          label="City:"
          value={address.city}
          onChange={onAddressChange('city')}
        />
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="outlined-state-native-simple">State:</InputLabel>
          <Select
            native
            value={address.state}
            onChange={onAddressChange('state')}
            label="Statee"
            inputProps={{
              name: 'type',
              id: 'outlined-state-native-simple',
            }}
          >
            {states.map(({ value, text }) => (
              <option value={value}>{text}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel htmlFor="outlined-country-native-simple">
            Country:
          </InputLabel>
          <Select
            native
            value={address.country}
            onChange={onAddressChange('country')}
            label="Country"
            inputProps={{
              name: 'type',
              id: 'outlined-country-native-simple',
            }}
          >
            {countries.map(({ value, text }) => (
              <option value={value}>{text}</option>
            ))}
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          fullWidth
          id="oZipCode"
          label="Zip Code:"
          value={address.zipCode}
          onChange={onAddressChange('zipCode')}
        />
      </CardContent>
    </Card>
  );
};
