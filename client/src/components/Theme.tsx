import { ThemeOptions } from '@material-ui/core';
import React from 'react';
import { Context } from 'react';
import { MouseEventHandler, useState } from 'react';

export const themeObject: ThemeOptions = {
  typography: {
    fontSize: 13,
  },
  palette: {
    primary: { main: '#00838f' },
    secondary: { main: '#8f2600' },
    mode: 'light',
  },
};

export const useDarkMode: () => [
  ThemeOptions,
  MouseEventHandler<HTMLButtonElement>,
] = () => {
  const [theme, setTheme] = useState<ThemeOptions>(themeObject);

  const { palette: { mode } = {} } = theme;

  const toggleDarkMode = () => {
    const updatedTheme: ThemeOptions = {
      ...theme,
      palette: {
        ...theme.palette,
        mode: mode === 'light' ? 'dark' : 'light',
      },
    };
    setTheme(updatedTheme);
  };

  return [theme, toggleDarkMode];
};

export const ToggleThemeContext: Context<MouseEventHandler<HTMLButtonElement>> =
  React.createContext<MouseEventHandler<HTMLButtonElement>>(() => {});
