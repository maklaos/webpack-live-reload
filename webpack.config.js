require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const proxy = require('http-proxy-middleware');

const imageProxy = proxy('/demo', {
    target: "https://demo.opencart.com/image/catalog/",
    changeOrigin: true
});

const config = {
    entry: ['./js/main.js', './scss/main.scss'],
    output: {
        filename: '[name].js',
        chunkFilename: 'bundle-[name].js',
        path: path.resolve(__dirname, 'static/compiled/js/'),
        publicPath: '/static/compiled/js/',
    },
    plugins: [
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            proxy: "https://www.facebook.com/",
            open: false,
            serveStatic: [{
                route: "/static",
                dir: 'static'
            }],
            rewriteRules: [
                {
                    match: "</body>",
                    replace: "<div id='app'><test-component></test-component></div>" +
                        "<script src='/static/compiled/js/main.js'></script>" +
                        "<script src='/static/compiled/js/simple.js'></script>" +
                        "</body>\n"
                },
                {
                    match: "</head>",
                    replace: "<link media=\"all\" rel=\"stylesheet\" href=\"/static/compiled/css/main.css\" />" +
                        "</head>"
                }
            ],
            middleware: [
                imageProxy
            ],
            files: [{
                match: [
                    'static/compiled/css/main.css',
                    'js/main.js',
                    'js/vanilla/simple.js',
                    'js/**/*.vue',
                ],
                fn: function(event, file) {
                    if (event === 'change') {
                        const bs = require('browser-sync').get('bs-webpack-plugin');
                        console.log('\n - file has changed:', file);
                        if (file.split('.').pop() === 'css') {
                            bs.reload("*.css");
                        } else {
                            bs.reload("");
                        }
                    }
                },
            }],
        },{
            reload: false,
            name: 'bs-webpack-plugin'
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "../css/[name].css",
            chunkFilename: "../css/[id].css"
        }),
        new CopyWebpackPlugin([
            {
                from: __dirname + '/js/vanilla',
                to: __dirname + '/static/compiled/js',
                toType: 'dir'
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.scss|\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')({
                                'overrideBrowserslist': ['> 1%', 'last 2 versions', 'iOS > 9', 'Firefox ESR', 'dead']
                            })],
                        }
                    },
                    "sass-loader"
                ]
            },
        ]
    },
    resolve: {
        alias: {
            vue: process.argv.includes("--watch") ? 'vue/dist/vue.js' : 'vue/dist/vue.min'
        }
    }
};

module.exports = config;
