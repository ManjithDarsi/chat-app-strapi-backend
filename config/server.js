module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['1z8GL5mE8cC7U9ELDbTfxw==','ymLPyW79ZOhpyYDO58oHRw==','9UMbYXoAfDCjfnlocboRUQ==','OcNZ4GogFTx5xCHQEN9Utg==']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});