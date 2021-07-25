import React, { useEffect, useState } from 'react';
import { ToggleThemeContext, useDarkMode } from './components/Theme';
import { setAccessToken } from './services/session/accessToken';
import { GeneralRoutes } from './routes/Routes';
import './App.css';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
  const [theme, toggleDarkMode] = useDarkMode();

  const themeConfig = createMuiTheme(theme, toggleDarkMode);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/refresh_token', {
      method: 'POST',
      credentials: 'include',
    }).then(async (data) => {
      const { accessToken } = await data.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>loading...</div>;
  return (
    <MuiThemeProvider theme={themeConfig}>
      <ToggleThemeContext.Provider value={toggleDarkMode}>
        <GeneralRoutes />
      </ToggleThemeContext.Provider>
    </MuiThemeProvider>
  );
};
