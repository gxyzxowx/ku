/*
 * @Date: 2021-07-21 17:46:46
 * @LastEditors: 曾迪
 * @LastEditTime: 2021-07-21 17:46:46
 * @FilePath: \ku\webpack.config.js
 * @Description: 
 */
module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
}