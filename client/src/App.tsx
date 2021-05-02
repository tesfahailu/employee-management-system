import React from 'react';
import 'App.css';
import { gql, useQuery } from '@apollo/client';

const App = () => {
  const { data, loading } = useQuery(gql`
    {
      hello
    }
  `);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1 className="hello">{JSON.stringify(data)}</h1>
    </div>
  );
};

export default App;
