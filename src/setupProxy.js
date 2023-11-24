const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://project-pbl6-production.up.railway.app',
            // target: 'https://api.escuelajs.co',

            changeOrigin: true,
        })
    );
};