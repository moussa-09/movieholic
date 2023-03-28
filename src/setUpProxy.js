const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `https://movieholic.onrender.com:${process.env.port || 5000}`,
      changeOrigin: true,
    })
  );
};