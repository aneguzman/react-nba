import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE,
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        'whatwg-fetch', //To be able to use fetch.
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    node: {
        dns: 'mock',
        net: 'mock',
        fs: 'empty'
        },
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            // {
            //     test: /\.html$/,
            //     use: [ {
            //       loader: 'html-loader',
            //       options: {
            //         minimize: true,
            //         removeComments: false,
            //         collapseWhitespace: false
            //       }
            //     }]
            // },
            // {
            //     test: /\.md$/,
            //     use: [
            //         {
            //             loader: "markdown-loader",
            //             options: {
            //                 /* your options here */
            //             }
            //         }
            //     ]
            // },
            { test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [ 'file?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]},
                
        ]
    },
    resolve: {
        extentions: [ '.png', '.js' ]
      }
};