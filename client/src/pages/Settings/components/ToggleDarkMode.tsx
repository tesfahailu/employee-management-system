import React, { useContext } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { ToggleThemeContext } from '../../../components/Theme';

export const ToggleDarkMode = () => {
  const toggleDarkMode = useContext(ToggleThemeContext);
  return (
    <FormControlLabel
      control={<Switch onClick={toggleDarkMode} />}
      label="mode"
    />
  );
};
