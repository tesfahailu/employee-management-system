import { Sequelize } from 'sequelize-typescript';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config.js')[env];

export default async () => {
  const sequelize = await new Sequelize(
    process.env[config.use_env_variable] as string,
    {
      define: {
        timestamps: false,
      },
      dialect: 'postgres',
      models: [__dirname + '/models'],
    },
  );

  sequelize
    .authenticate()
    .then(async () => {
      console.log('Data base connected successfully');
    })
    .catch((err: any) => console.log('Error', err));

  return sequelize;
};
