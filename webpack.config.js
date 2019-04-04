
const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist',
        library: 'frontst'
    },
    devServer: {
        contentBase: path.resolve(__dirname,  'public'),
        compress: true,
        port : 6868
    },
    mode: 'development'
};