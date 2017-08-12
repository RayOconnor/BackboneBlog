var path = require('path');
module.exports = {
    entry: './entry.js',
    output: {
        filename: './bundle.js'
    },
    watch: true,
    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, 'loaders')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {test: /\.mustache$/, loader: 'tungsten_template'},
        ],
    }
};
