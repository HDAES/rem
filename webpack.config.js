const webpack = require('webpack')
const path = require('path')

module.exports = {
    //页面入口文件
    entry: [
        './app.js'
    ],
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        // 加载器配置
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
}