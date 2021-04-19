require('dotenv').config();
module.exports = {
  development: {
    use_env_variable: 'SQL_DEV_CONNECTION_URL',
  },
  production: {
    use_env_variable: 'SQL_PROD_CONNECTION_URL',
  },
};
