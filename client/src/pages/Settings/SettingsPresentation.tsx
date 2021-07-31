import { Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';
import React, { Fragment } from 'react';
import ColorTool from '../../modules/components/ColorTool';
import { ToggleDarkMode } from '../../modules/components/ToggleDarkMode';
import { UploadImagePaper } from '../../modules/components/UploadImagePaper';
import { UserInfoPaper } from '../../modules/components/UserInfoPaper';

const useStyles = makeStyles({
  headerSpacing: {
    marginBottom: 10,
  },
});

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
