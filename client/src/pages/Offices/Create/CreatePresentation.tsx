import {
  Card,
  Typography,
  CardContent,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
  Grid,
  SelectChangeEvent,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { CreateOfficePageText } from '../../../text';
import { CreateOfficeAddressType } from '../../../types/types';
import { PageHeader } from '../../../modules/components/PageHeader';
import { FormOffice } from '../../../modules/components/FormOffice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginBottom: theme.spacing(1),
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
      <PageHeader
        title={CreateOfficePageText.PageHeaderText}
        subtitle={CreateOfficePageText.PageSubHeaderText}
        isButton={false}
      />
      <FormOffice address={address} onAddressChange={onAddressChange} />
      <Button
        className={classes.actionButtonSpacing}
        disabled={!isFormComplete}
        onClick={saveChanges}
      >
        {CreateOfficePageText.SaveButtonText}
      </Button>
    </Fragment>
  );
};
