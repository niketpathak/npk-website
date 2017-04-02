var path = require('path');

module.exports = {

    entry: {
        app: ["./src/app/index.js"]
    },
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }],
            },
            // {
            //     test: /\.css$/,
            //     loader: 'style-loader!css-loader'
            // }
        ]
    }
};