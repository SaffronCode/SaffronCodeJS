var path = require('path');
 
module.exports = {
    mode: 'production',
    entry: './src/SaffronCode.ts',
    output: {
        path: path.resolve('lib'),
        filename: 'SaffronCode.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}