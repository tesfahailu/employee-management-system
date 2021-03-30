import { Sequelize } from 'sequelize-typescript';

export default async () => {
  console.log('Sequlize db URL: ' + process.env.SQL_CONNECT_URL);
  const sequelize = await new Sequelize(process.env.SQL_CONNECT_URL || '', {
    define: {
      timestamps: false,
    },
    dialect: 'postgres',
  });

  sequelize
    .authenticate()
    .then(async () => console.log('Database connected successfully'))
    .catch((err: any) => console.error('Error', err));

  return sequelize;
};
