import React, { useEffect, useState } from 'react';
import { setAccessToken } from './services/session/accessToken';
import { GeneralRoutes } from './routes/Routes';
import './App.css';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
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
  return <GeneralRoutes />;
};
