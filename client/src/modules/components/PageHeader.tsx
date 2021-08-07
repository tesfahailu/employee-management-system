import { Grid, Typography, Button } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router';
import BreadCrumb from './BreadCrumb';

interface HeaderProps {
  title: string;
  subtitle: string;
  isButton?: boolean;
  isBreadCrumb?: boolean;
  buttonText?: string;
  buttonHref?: string;
}

export const PageHeader: React.FC<HeaderProps> = ({
  title,
  subtitle,
  isButton = false,
  isBreadCrumb = true,
  buttonText,
  buttonHref,
}) => {
  const history = useHistory();
  return (
    <Grid container direction="row" justifyContent="space-between" spacing={4}>
      <Grid item xs>
        <Grid container direction="column">
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle2">{subtitle}</Typography>
          {isBreadCrumb && <BreadCrumb />}
        </Grid>
      </Grid>
      {isButton && buttonHref && (
        <Grid item>
          <Button
            startIcon={<AddIcon />}
            onClick={() => history.push(buttonHref)}
          >
            {buttonText}
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
