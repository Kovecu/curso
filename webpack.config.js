
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const MinimiceCssAssetsPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false
                },
                
            },
            {
                test: /\.(png|svg|gif|jpg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        esModule: false
                    }
                }
            },
           
        ],
       /* optimization: {
            minimize: true,
            minimizer: [ new MinimiceCssAssetsPlugin(),]
                
            
        },
        */
    },
    plugins: [
        new HtmlWebPackPlugin({ 
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                {from: 'src/assets', to: 'assets/'
                 
            }
            ]
        })
    ]
}