// webpack配置文件，用于直接使用webpack命令进行打包

const path = require('path')
// webpack插件
const webpack = require('webpack')
// html-webpack插件
const htmlWebpackPlugin = require('html-webpack-plugin')

const { VueLoaderPlugin } = require("vue-loader")

module.exports = { //指定入口和出口
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        port: 3000,
        contentBase: 'src',  // 找不到index.html默认寻找路径
        hot: true
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(), // 热更新模块对象，热更新失效时启用
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),// 指定的页面路径

            filename: 'index.html'  //生成的页面路径
        }),
        new VueLoaderPlugin()  //激活vueloader插件
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 配置处理.css第三方loader规则 从右到左处理
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: [
                    {   
                        loader: 'url-loader',
                        options:{ 
                            limit: 1000,  //限制自动转换base64的大小
                        }
                    }
                ]
            },
            { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude:/node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        alias: {
            // "vue$": "vue/dist/vue.js"  //修改Vue在被导入时候包的路径
        }
    }
}