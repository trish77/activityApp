const path = require('path');
const fs      = require('fs');
const webpack = require('webpack');
 


var  app = path.resolve(__dirname, 'src/');
var  build = path.resolve(__dirname, 'src/dist/assets');


module.exports = {
  mode: "development",
  entry: app + "/index.js",
  output: {
    path: build,
    filename: "bundle.js",
    publicPath: '/dist/'
	},
	watch: true,
  devServer: {
    inline: true,
    contentBase: build,
    port: 3000
	},
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { 
          loader: "babel-loader"
      }
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,

        use: {
          loader: 'json-loader'
        }
      },
      {
        test: /\.css$/,
        use: {
          loader: "style-loader!css-loader!autoprefixer-loader"}
      },
      {
        test: /\.scss$/,
        use: { 
          loader: "style-loader!css-loader!autoprefixer-loader!sass-loader" }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: "file-loader"}
    
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.scss', '.css', '.jpg' ],
    modules: ['node_modules', app]
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}

