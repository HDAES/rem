# 使用rem布局手机端界面

## 使用`sass`编写px单位转rem的函数，使用webpack进行打包。

1. 初始化项目

   ```JavaScript
   npm init
   ```

2. 因为需要使用`webpack`进行打包，先全局安装`webpack`

   ```javascript
   npm install -g --save-dev webpack
   注：如果使用的4.x版本的webpack，还需要安装webpack-cli
   npm install -g --save-dev webpack-cli
   ```

3. 安装`sass`和打包需要的模块

   ```
   npm install sass-loader node-sass --save-dev
   npm install css-loader style-loader --save-dev 
   ```

4. 在应用面安装webpack

   ```
   npm install  --save-dev webpack
   注：如果使用的4.x版本的webpack，还需要安装webpack-cli
   npm install  --save-dev webpack-cliefinn.
   ```

5. 配置`webpack`

   在根目录下创建 webpack.config.js文件，为webpack的配置文件。

   ```JavaScript
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
   ```

6. 创建app.js文件为webpack打包的入口文件，创建build文件夹，里面存放webpack打包生成的文件，创建index.scss文件，里面放样式代码，再在app.js中引入scss文件。
