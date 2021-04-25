const { createProxyMiddleware } = require('http-proxy-middleware');
let url_local = process.env.API_URL_AXIOS;

module.exports = function(app) {
  //Register
  app.use(
    "/user/register",
    createProxyMiddleware({
      //target: 'http://locallocal:4000',
      target: url_local,
      changeOrigin: true,
    })
  );
  //Login
  app.use(
    "/user/login",
    createProxyMiddleware({
      //target: 'http://locallocal:4000',
      target: url_local,
      changeOrigin: true,
    })
  );
  //listUser
  app.use(
    "/user/listUser",
    createProxyMiddleware({
      //target: 'http://locallocal:4000',
      target: url_local,
      changeOrigin: true,
    })
  );
  app.use(
    "/user/getUserByFullname",
    createProxyMiddleware({
      //target: 'http://locallocal:4000',
      target: url_local,
      changeOrigin: true,
    })
  );
  app.use(
    "/user/addFriend",
    createProxyMiddleware({
      //target: 'http://locallocal:4000',
      target: url_local,
      changeOrigin: true,
    })
  );
  app.use(
    "/user/cancleFriend",
    createProxyMiddleware({
      //target: 'http://locallocal:4000',
      target: url_local,
      changeOrigin: true,
    })
  );
  app.use(
    "/user/getAccept",
    createProxyMiddleware({
      //target: 'http://locallocal:4000',
      target: url_local,
      changeOrigin: true,
    })
  );
  app.use(
    "/user/getFriend",
    createProxyMiddleware({
      //target: 'http://locallocal:4000',
      target: url_local,
      changeOrigin: true,
    })
  );
  app.use(
    "/user/acceptFriend",
    createProxyMiddleware({
      //target: 'http://locallocal:4000',
      target: url_local,
      changeOrigin: true,
    })
  );

  app.use(
    "/user/checkAddFriend",
    createProxyMiddleware({
      //target: 'http://locallocal:4000',
      target: url_local,
      changeOrigin: true,
    })
  );
  app.use(
    "/user/cancleSend",
    createProxyMiddleware({
      //target: 'http://locallocal:4000',
      target: url_local,
      changeOrigin: true,
    })
  );
};