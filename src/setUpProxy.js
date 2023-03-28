const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `https://movieholic.onrender.com:${process.env.port || 10000}`,
      changeOrigin: true,
    })
  );
};