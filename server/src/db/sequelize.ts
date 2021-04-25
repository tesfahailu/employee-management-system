import { Sequelize } from 'sequelize-typescript';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config.js')[env];

let sequelize: Sequelize;
export default async () => {
  sequelize = await new Sequelize(
    process.env[config.use_env_variable] as string,
    {
      define: {
        timestamps: false,
      },
      dialect: 'postgres',
      models: [__dirname + '/models'],
    },
  );

  await sequelize
    .authenticate()
    .then(async () => {
      console.log('Data base connected successfully');
    })
    .catch((err: any) => console.log('Error', err));
};

export function getSequelize(): Sequelize {
  return sequelize;
}
