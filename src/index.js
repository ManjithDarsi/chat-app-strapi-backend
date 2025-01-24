const registerSocket = require('./socket');

module.exports = {
  async bootstrap({ strapi }) {
    registerSocket({ strapi });
  },
};
