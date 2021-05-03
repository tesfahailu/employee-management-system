import React from 'react';
import 'App.css';
import { useHelloQuery } from './generated/graphql';

const App = () => {
  const { data, loading } = useHelloQuery();

  if (loading || !data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1 className="hello">{data.hello}</h1>
    </div>
  );
};

export default App;
