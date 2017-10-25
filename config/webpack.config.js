const path = require('path');
const webpack = require('webpack');

const LIBRARY_NAME = 'material-ui-agenda';
const baseConfig = {
  entry: {
    'material-ui-agenda': path.join(__dirname, '../src/index.js'),
  },
  output: {
    path: path.join(__dirname, '../build/'),
    library: LIBRARY_NAME,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: [
    'react-transition-group/TransitionGroup',
    {
      react: {
        root: 'React',
        commonjs2: './react',
        commonjs: ['./react'],
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: './react-dom',
        commonjs: ['./react-dom'],
        amd: 'react-dom',
      },
    },
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
  },
};

let config;

if (process.env.NODE_ENV === 'production') {
  config = Object.assign({}, baseConfig, {
    output: Object.assign({}, baseConfig.output, {
      filename: `${LIBRARY_NAME}.umd.js`,
    }),
    plugins: baseConfig.plugins.concat([
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true,
        },
      }),
    ]),
  });
} else {
  config = Object.assign({}, baseConfig, {
    output: Object.assign({}, baseConfig.output, {
      filename: `${LIBRARY_NAME}.umd.js`,
    }),
  });
}

module.exports = config;
