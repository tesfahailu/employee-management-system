import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/Theme';
import { setAccessToken } from './services/session/accessToken';
import { GeneralRoutes } from './routes/Routes';
import './App.css';
import { CssBaseline } from '@material-ui/core';

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
    <ThemeProvider>
      <CssBaseline />
      <GeneralRoutes />
    </ThemeProvider>
  );
};
