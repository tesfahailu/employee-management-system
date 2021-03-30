import express from 'express';
require('dotenv').config();
import connectToDataBase from './db/sequelize';

(async () => {
  const app = express();
  const port = process.env.CLIENT_PORT;
  app.get('/', (_req, res) => res.send('Hello World!'));
  connectToDataBase();

  app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`),
  );
})();
