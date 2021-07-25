import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';
import { UserInfoPaper } from './components/UserInfoPaper';
import { UploadImagePaper } from './components/UploadImagePaper';
import { ToggleDarkMode } from './components/ToggleDarkMode';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerSpacing: {
      marginBottom: 10,
    },
  }),
);

export const SettingsPresentation = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography variant="h5" className={classes.headerSpacing}>
        Settings
      </Typography>
      <UploadImagePaper />
      <UserInfoPaper />
      <ToggleDarkMode />
    </Fragment>
  );
};
