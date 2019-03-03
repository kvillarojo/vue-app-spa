const webpack = require("webpack");
const clientConfig = require("./webpack.client.config");


module.exports = function setupDevServer(app){
  const clientCompiler = webpack(clientConfig);
  app.user(
    require("webpack-dev-middleware")(clientCompiler, {
      stats: {
        colors: true
      }
    })
  );
  app.use(require("webpack-hot-middleware")(clientCompiler));
};
