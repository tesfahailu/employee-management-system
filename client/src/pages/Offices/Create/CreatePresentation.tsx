import {
  makeStyles,
  Theme,
  createStyles,
  Card,
  Typography,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
  Grid,
} from '@material-ui/core';
import React, { Fragment } from 'react';
import { CreateOfficePageText } from '../../../text';
import { CreateOfficeAddressType } from '../../../types/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginBottom: '1REM',
    },
    header: {
      marginBottom: theme.spacing(2),
    },
    actionButtonSpacing: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    formControl: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
    },
  }),
);

export const CreatePresentation = ({
  address,
  onAddressChange,
  isFormComplete,
  saveChanges,
}: CreateOfficeAddressType) => {
  const classes = useStyles();
  const countries = [{ value: 'USA', text: 'USA' }];
  const states = [
    { value: 'MA', text: 'Massachusetts' },
    { value: 'NY', text: 'New York' },
  ];

  return (
    <Fragment>
      <Grid container justify="space-between">
        <Typography variant="h5" className={classes.header}>
          {CreateOfficePageText.PageHeaderText}
        </Typography>
        <Button
          color="primary"
          variant="contained"
          className={classes.actionButtonSpacing}
          disabled={!isFormComplete}
          onClick={saveChanges}
        >
          {CreateOfficePageText.SaveButtonText}
        </Button>
      </Grid>
      <Card className={classes.card}>
        <CardContent>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="oStreetAddress1"
            label="Street Address 1:"
            value={address.streetAddress1}
            onChange={onAddressChange('streetAddress1')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="oStreetAddress2"
            label="Street Address 2:"
            value={address.streetAddress2}
            onChange={onAddressChange('streetAddress2')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="oCity"
            label="City:"
            value={address.city}
            onChange={onAddressChange('city')}
            color="primary"
          />
          <FormControl
            variant="outlined"
            className={classes.formControl}
            fullWidth
          >
            <InputLabel htmlFor="outlined-state-native-simple">
              State:
            </InputLabel>
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
          <FormControl
            variant="outlined"
            className={classes.formControl}
            fullWidth
          >
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
            variant="outlined"
            margin="normal"
            fullWidth
            id="oZipCode"
            label="Zip Code:"
            value={address.zipCode}
            onChange={onAddressChange('zipCode')}
            color="primary"
          />
        </CardContent>
      </Card>
    </Fragment>
  );
};