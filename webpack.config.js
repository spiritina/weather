const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        'bundle': './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dist/html'
    },
     plugins: [
           new CopyPlugin([
            { from: './src/static/',
              ignore: ['./src/static/img/','**/*.svg'] }
     ]),
   ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
      }},
      
      {
        test: /\.svg$/,
        use: [
            {
            loader: 'svg-sprite-loader'
            }

             ]
        },
        
]}
    
};

