import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { setAccessToken } from '../services/session/accessToken';
import { MeDocument, MeQuery, useLoginMutation } from '../generated/graphql';

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log('for submit');
        const response = await login({
          variables: {
            username,
            password,
          },
          update: (store, { data }) => {
            if (!data) return null;
            store.writeQuery<MeQuery>({
              query: MeDocument,
              data: { __typename: 'Query', me: data.login.user },
            });
          },
        });

        if (response && response.data)
          setAccessToken(response.data.login.accessToken);

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
      <button type="submit">login</button>
    </form>
  );
};
