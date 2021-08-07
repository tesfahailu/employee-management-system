import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './modules/components/Theme';
import { StyledEngineProvider, Theme } from '@material-ui/core/styles';
import { setAccessToken } from './services/session/accessToken';
import { Routes } from './routes/Routes';
import './App.css';
import { CssBaseline } from '@material-ui/core';

declare module '@material-ui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

export const App: React.FC = ({}) => {
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
    <StyledEngineProvider injectFirst>
      <ThemeProvider>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
