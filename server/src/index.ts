import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import connectToDataBase from './db/sequelize';
import cors from 'cors';
import cookieParser from 'cookie-parser';
require('dotenv').config();

import { LeaveResolver } from './graphql/resolvers/LeaveResolver';
import { ExperienceResolver } from './graphql/resolvers/ExperienceResolver';
import { DepartmentResolver } from './graphql/resolvers/DepartmentResolver';
import { EmployeeResolver } from './graphql/resolvers/EmployeeResolver';
import { LoginResolver } from './graphql/resolvers/LoginResolver';
import { RoleResolver } from './graphql/resolvers/RoleResolver';
import { ResourceResolver } from './graphql/resolvers/ResourceResolver';
import { PermissionResolver } from './graphql/resolvers/PermissionResolver';

(async () => {
  const app = express();
  const port = process.env.CLIENT_PORT;
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );
  app.use(cookieParser());

  connectToDataBase();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        LoginResolver,
        RoleResolver,
        ResourceResolver,
        PermissionResolver,
        EmployeeResolver,
        DepartmentResolver,
        ExperienceResolver,
        LeaveResolver,
      ],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app });

  app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
  );
})();
