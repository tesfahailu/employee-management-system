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
import { useChangeTheme } from '../../modules/components/Theme';
import { getCookie } from '../../modules/utils/getCookie';

export const SectionMode = () => {
  const changeTheme = useChangeTheme();
  const [mode, setMode] = React.useState(getCookie('paletteMode') || 'system');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const preferredMode = prefersDarkMode ? 'dark' : 'light';

  const handleChangeThemeMode = (
    event: React.MouseEvent<HTMLElement>,
    paletteMode: string,
  ) => {
    if (paletteMode === null) return;

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
          <ToggleButton value="light" aria-label="light">
            <Brightness7Icon sx={{ mr: 1 }} />
            {'light'}
          </ToggleButton>
          <ToggleButton value="system" aria-label="system">
            <SettingsBrightnessIcon sx={{ mr: 1 }} />
            {'system'}
          </ToggleButton>
          <ToggleButton value="dark" aria-label="dark">
            <Brightness4Icon sx={{ mr: 1 }} />
            {'dark'}
          </ToggleButton>
        </ToggleButtonGroup>
      </CardContent>
    </Card>
  );
};
