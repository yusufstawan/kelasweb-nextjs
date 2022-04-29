const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'yusufstawan',
        mongodb_password: 'admin123',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'my-site-dev',
      }
    }
  }

  return {
    env: {
      mongodb_username: 'yusufstawan',
      mongodb_password: 'admin123',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'my-site',
    }
  }
};
