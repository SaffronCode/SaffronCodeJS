var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: './src/SaffronCode.js',
    output: {
        path: path.resolve('lib'),
        filename: 'SaffronCode.js',
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