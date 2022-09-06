const path = require('path')
function resolve(dir) {
  return path.resolve(__dirname, dir)
}
// 开发环境配置
const devConfig = {
  // ...
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('packages'),
        assets: resolve('examples/assets'),
        views: resolve('examples/views')
      }
    }
  },
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        return options
      })
  }
}
module.exports = devConfig
