const { resolve, getComponentEntries } = require('./utils')
const buildConfig = {
  lintOnSave: false,
  //  输出文件目录
  outputDir: resolve('lib'),
  //  webpack配置
  configureWebpack: {
    //  入口文件
    // '.js'  {

    entry: getComponentEntries('packages'),
    //  输出配置
    output: {
      // 资源路径使用相对路径
      //  文件名称 name 和entry 对象的key值
      filename: '[name]/index.js',
      //  构建依赖类型
      libraryTarget: 'umd',
      //  依赖输出
      libraryExport: 'default',
      //  依赖名称
      library: 'one-ui-element'
    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    },
    module: {
      rules: [
        // 参考文档： https://webpack.docschina.org/configuration/module#modulerules
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          // 文件打包方式
          type: 'asset/resource',
          generator: {
            filename: 'resource/[hash:10][ext][query]',
            publicPath: '../../'
          }
        },
        {
          test: /\.css$/,
          resourceQuery: /inline/,
          use: 'url-loader'
        }
      ]
    }
  },
  //  样式输出
  css: {
    sourceMap: true,
    extract: {
      filename: '[name]/style.css'
    }
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks')
    config.plugins.delete('copy')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.plugins.delete('html')
    config.plugins.delete('hmr')
    config.entryPoints.delete('app')
  }
}

module.exports = buildConfig
