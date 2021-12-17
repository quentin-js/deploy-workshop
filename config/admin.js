module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '79db1e1bd4d2579f1686814ec6432826'),
  },
});
