import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useRegisterMutation } from '../generated/graphql';

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await register({
          variables: {
            username,
            password,
          },
        });
        history.push('/');
      }}
    >
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="useranme"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">register</button>
    </form>
  );
};
