import React, { useContext } from 'react';
import { FormControlLabel, Switch, useTheme } from '@material-ui/core';
import { ToggleThemeContext } from '../../../components/Theme';

export const ToggleDarkMode = () => {
  const toggleDarkMode = useContext(ToggleThemeContext);
  const theme = useTheme();
  return (
    <FormControlLabel
      control={<Switch onClick={toggleDarkMode} />}
      label={theme.palette.mode === 'light' ? 'LIGHT' : 'DARK'}
    />
  );
};
