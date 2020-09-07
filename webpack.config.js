const path = require(`path`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: { loader: `babel-loader` },
      },
      {
        test: /\.(png|jpeg|jpg|gif|ico)$/,
        use: { loader: `file-loader` },
      },
      {
        test: /\.(woff|woff2|ttf|oft|eot|svg)$/,
        use: { loader: `file-loader` },
      },
      {
        test: /\.(css)$/,
        use: [
            { loader: `style-loader` },
            { loader: `css-loader` },
        ],
      },
      {
        test: /\.(s[ca]ss)$/,
        exclude: /node_modules/,
        use: [
            {  loader: `style-loader` },
            {  loader: `css-loader` },
            {  loader: `sass-loader` }
        ],
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      },      
    ],  
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`]
  },
  devtool: `source-map`
};