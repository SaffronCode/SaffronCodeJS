var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Preloader.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'Preloader.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}