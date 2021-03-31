const { override } = require('customize-cra');
const addCustomize = () => config => {
    // if (process.env.NODE_ENV === 'production') {
      // 关闭sourceMap
      config.devtool = false;
      // 配置打包后的文件位置
      config.output.library = 'sub_react';
      config.output.publicPath = '//localhost:3000/';
      config.output.libraryTarget = 'umd';
      config.output.jsonpFunction = `webpackJsonp_sub_react`;
    // }
    return config;
}


module.exports = {
    webpack: override(
        addCustomize()
    ),
    devServer: (configFunction) => {
        return function (proxy, allowedHost) {
          const config = configFunction(proxy, allowedHost);
          config.open = false;
          config.hot = false;
          config.headers = {
            'Access-Control-Allow-Origin': '*',
          };
          // Return your customised Webpack Development Server config.
          return config;
        };
    }
};
