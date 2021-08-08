import React from 'react';
import {
  Box,
  Card,
  CardContent,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import { useChangeTheme } from './Theme';
import { getCookie } from '../utils/getCookie';

export const ToggleDarkMode = () => {
  const changeTheme = useChangeTheme();
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
    <Card sx={{ mb: 1 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Mode:
        </Typography>
        <ToggleButtonGroup
          exclusive
          value={mode}
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
            <Box
              sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}
            >
              <Brightness7Icon sx={{ mr: 1 }} />
              {'light'}
            </Box>
          </ToggleButton>
          <ToggleButton
            value="system"
            aria-label="system"
            data-ga-event-category="settings"
            data-ga-event-action="system"
          >
            <Box
              sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}
            >
              <SettingsBrightnessIcon sx={{ mr: 1 }} />
              {'system'}
            </Box>
          </ToggleButton>
          <ToggleButton
            value="dark"
            aria-label={'dark'}
            data-ga-event-category="settings"
            data-ga-event-action="dark"
          >
            <Box
              sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}
            >
              <Brightness4Icon sx={{ mr: 1 }} />
              {'dark'}
            </Box>
          </ToggleButton>
        </ToggleButtonGroup>
      </CardContent>
    </Card>
  );
};
