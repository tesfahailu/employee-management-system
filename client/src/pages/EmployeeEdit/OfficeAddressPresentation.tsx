import {
  Button,
  Card,
  CardContent,
  CardHeader,
  createStyles,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { Fragment } from 'react';
import { EditEmployeePageText } from '../../text';
import { EditEmployeeAddressType } from '../../types/types';

export const OfficeAddressPresentation = ({
  address,
  onAddressChange,
  isFormChanged,
  saveAddress,
}: EditEmployeeAddressType) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography variant="h5" className={classes.textSpacingBelow}>
        {EditEmployeePageText.PAGE_HEADER_TEXT}
      </Typography>
      <Card>
        <CardHeader
          title={
            <Typography variant="h6">
              {EditEmployeePageText.OFFICE_ADDRESS_TEXT}
            </Typography>
          }
          action={
            <Button
              color="primary"
              variant="outlined"
              onClick={saveAddress}
              disabled={!isFormChanged}
            >
              {EditEmployeePageText.SAVE_BUTTON_TEXT}
            </Button>
          }
        />
        <CardContent>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="streetAddress1"
            label="Street Address 1:"
            value={address.streetAddress1}
            onChange={onAddressChange('streetAddress1')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="streetAddress2"
            label="Street Address 2:"
            value={address.streetAddress2}
            onChange={onAddressChange('streetAddress2')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="city"
            label="City:"
            value={address.city}
            onChange={onAddressChange('city')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="state"
            label="State:"
            value={address.state}
            onChange={onAddressChange('state')}
            color="primary"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="zipCode"
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

const useStyles = makeStyles(() =>
  createStyles({
    textSpacingBelow: {
      marginBottom: '1REM',
    },
  }),
);
