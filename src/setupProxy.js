const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.escuelajs.co',
            // target: 'https://api.escuelajs.co',

            changeOrigin: true,
        })
    );
};