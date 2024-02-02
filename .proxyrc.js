const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  // this middleware serve statc assets
  app.use(
    createProxyMiddleware('/dapi', {
      target: 'https://www.swiggy.com/',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
      }
    }),
  )
}