var webpack = require('webpack');
var path = require('path');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'

  },

  module:{
    loaders:[
      {
        test : /\.jsx?/,
        include: APP_DIR,
        loader : 'babel'
      },
      {
        test : /\.css?/,
        include:APP_DIR,
        loader : 'style-loader!css-loader'
      }
    ]
  },

  plugins:[
    new BrowserSyncPlugin({
      host:'localhost',
      port:'3000',
      proxy:'http://localhost:3100/'
    },

    {
      reload:true
    }
    
    )
  ]

}

  module.exports = config;
