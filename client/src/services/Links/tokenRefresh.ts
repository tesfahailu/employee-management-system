import { TokenRefreshLink } from 'apollo-link-token-refresh';
import { getAccessToken, setAccessToken } from './../session/accessToken';
import jwtDecode from 'jwt-decode';

interface MyToken {
  userId: string;
  exp: number;
}

export const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined: () => {
    const token = getAccessToken();
    if (!token) return true;
    try {
      const { exp } = jwtDecode<MyToken>(token);
      if (Date.now() >= exp * 1000) {
        return false;
      } else {
        return true;
      }
    } catch {
      return false;
    }
  },
  fetchAccessToken: () => {
    return fetch('http://localhost:3000/refresh_token', {
      method: 'POST',
      credentials: 'include',
    });
  },
  handleFetch: (accessToken) => {
    console.log('Access token', accessToken);
    setAccessToken(accessToken);
  },
  handleError: (err) => {
    console.warn('Your refresh token is invalid. Try to relogin');
    console.log(err);
  },
});
