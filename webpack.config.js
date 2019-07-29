const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        'bundle.js': './src/js/index.js',
       // 'css/style.css': './src/static/css/style.css'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]'
    },
    devServer: {
        contentBase: './dist/html'
    },
     plugins: [
           new CopyPlugin([
            { from: './src/static/',
              ignore: ['./src/static/img/','**/*.svg', '**.*.css'] },
              {from: './src/js/components/slider/slider.css', to: './css'}
     ]),
   ],
  module: {
    rules: [
     /* {
        test: /\.сss$/,
        use: ['style-loader','css-loader'
        ],
      },*/
      
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

