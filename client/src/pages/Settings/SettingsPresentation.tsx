import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import { UserInfoPaper } from './components/UserInfoPaper';
import { UploadImagePaper } from './components/UploadImagePaper';
import { ToggleDarkMode } from './components/ToggleDarkMode';
import ColorTool from './components/ColorTool';

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
      <ColorTool />
    </Fragment>
  );
};
