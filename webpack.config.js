
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/static',
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
          test:/\.css$/,
          use:['style-loader','css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }

  ,  
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],


  devServer: {
    contentBase: './static',
    port: 3000,
    proxy: {
          '/api': {
             target: {
                host: "localhost",
                protocol: 'http:',
                port: 8000
             }
          },
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
          }
    }    
  }

};