const port = 9000
module.exports = {
    // publicPath: '//localhost:9000',
    // devServer: {
    //     port: 9000
    // },
    configureWebpack: {
        output: {
            library: "sub_vue",
            libraryTarget: "umd",
            jsonpFunction: `webpackJsonp_sub_vue`,
        }
    },
    devServer: {
        port: 9000,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
}
