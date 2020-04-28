
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname,'src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test: /\.js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: path.resolve(__dirname,'node_modules')
      },
      {
        test: /\.vue/,
        use: 'vue-loader'
      },
      {
        test: /\.css/,
        use:['vue-style-loader','css-loader']
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'public/index.html'),
      filename: 'index.html'
    })
    
  ]
}