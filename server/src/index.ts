import { sendRefeshToken } from './graphql/sendRefreshToken';
import { createAccessToken, createRefreshToken } from './graphql/auth';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import connectToDataBase from './db/sequelize';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { verify } from 'jsonwebtoken';
import 'dotenv/config';

import { LeaveResolver } from './graphql/resolvers/LeaveResolver';
import { ExperienceResolver } from './graphql/resolvers/ExperienceResolver';
import { DepartmentResolver } from './graphql/resolvers/DepartmentResolver';
import { EmployeeResolver } from './graphql/resolvers/EmployeeResolver';
import { UserResolver } from './graphql/resolvers/UserResolver';
import { RoleResolver } from './graphql/resolvers/RoleResolver';
import { ResourceResolver } from './graphql/resolvers/ResourceResolver';
import { PermissionResolver } from './graphql/resolvers/PermissionResolver';
import { OfficeResolver } from './graphql/resolvers/OfficeResolver';
import { ProjectResolver } from './graphql/resolvers/ProjectResolver';
import { SessionResolver } from './graphql/resolvers/SessionResolver';
import { User } from './db/models/User';

(async () => {
  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:8080',
      credentials: true,
    }),
  );
  app.use(cookieParser());

  app.get('/', (_req, res) => {
    res.send('hello');
  });

  app.post('/refresh_token', async (req, res) => {
    const token = req.cookies.jid;
    if (!token) {
      return res.send({ ok: false, accessToken: '' });
    }

    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (error) {
      console.log(error);
      return res.send({ ok: false, accessToken: '' });
    }
    const user = await User.findOne({ where: { id: payload.userId } });

    if (!user) return res.send({ ok: false, accessToken: '' });

    if (user.tokenVersion !== payload.tokenVersion)
      return res.send({ ok: false, accessToken: '' });

    sendRefeshToken(res, createRefreshToken(user));

    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });

  const port = process.env.CLIENT_PORT;

  connectToDataBase();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        UserResolver,
        RoleResolver,
        ResourceResolver,
        PermissionResolver,
        EmployeeResolver,
        ProjectResolver,
        SessionResolver,
        DepartmentResolver,
        ExperienceResolver,
        LeaveResolver,
        OfficeResolver,
      ],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
  );
})();
