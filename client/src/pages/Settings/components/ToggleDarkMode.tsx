import React from 'react';
import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from '@material-ui/core';
import { useChangeTheme } from '../../../components/Theme';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import { makeStyles } from '@material-ui/styles';
import { getCookie } from '../../../helper_functions/helperFunctions';

const useStyles = makeStyles({
  paper: {
    width: 352,
  },
  heading: {
    margin: '16px 0 8px',
  },
  icon: {
    marginRight: 8,
  },
});

export const ToggleDarkMode = () => {
  const changeTheme = useChangeTheme();
  const classes = useStyles();
  const [mode, setMode] = React.useState(getCookie('paletteMode') || 'system');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const preferredMode = prefersDarkMode ? 'dark' : 'light';

  const handleChangeThemeMode = (
    event: React.MouseEvent<HTMLElement>,
    paletteMode: string,
  ) => {
    if (paletteMode === null) {
      return;
    }

    setMode(paletteMode);

    if (paletteMode === 'system') {
      document.cookie = `paletteMode=;path=/;max-age=31536000`;
      changeTheme({ paletteMode: preferredMode });
    } else {
      document.cookie = `paletteMode=${paletteMode};path=/;max-age=31536000`;
      changeTheme({ paletteMode });
    }
  };
  return (
    <ToggleButtonGroup
      exclusive
      value={mode}
      color="primary"
      onChange={handleChangeThemeMode}
      aria-labelledby="settings-mode"
      fullWidth
    >
      <ToggleButton
        value="light"
        aria-label="light"
        data-ga-event-category="settings"
        data-ga-event-action="light"
      >
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <Brightness7Icon className={classes.icon} />
          {'light'}
        </Box>
      </ToggleButton>
      <ToggleButton
        value="system"
        aria-label="system"
        data-ga-event-category="settings"
        data-ga-event-action="system"
      >
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <SettingsBrightnessIcon className={classes.icon} />
          {'system'}
        </Box>
      </ToggleButton>
      <ToggleButton
        value="dark"
        aria-label={'dark'}
        data-ga-event-category="settings"
        data-ga-event-action="dark"
      >
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <Brightness4Icon className={classes.icon} />
          {'dark'}
        </Box>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
