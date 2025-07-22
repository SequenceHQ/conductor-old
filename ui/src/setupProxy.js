const { createProxyMiddleware } = require("http-proxy-middleware");
const target = process.env.WF_SERVER || "https://conductor-357440156127.europe-west2.run.app";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: target,
      //pathRewrite: { "^/api/": "/" },
      changeOrigin: true,
    })
  );
};
