import { RoleResolver } from './graphql/resolvers/RoleResolver';
import 'reflect-metadata';
import { LoginResolver } from './graphql/resolvers/LoginResolver';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
require('dotenv').config();
import connectToDataBase from './db/sequelize';

(async () => {
  const app = express();
  const port = process.env.CLIENT_PORT;
  app.get('/', (_req, res) => res.send('Hello World!'));
  connectToDataBase();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [LoginResolver, RoleResolver],
    }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
  );
})();
