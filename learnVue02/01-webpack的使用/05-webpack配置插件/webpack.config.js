//"path"为node.js中定义的
const path = require("path");
const webpack = require("webpack")
const hemlwebpackplugin = require("html-webpack-plugin")
const uglifyjswebpackplugin = require("uglifyjs-webpack-plugin")
module.exports={
  //入口
  entry:'./src/main.js',
  //出口
  output:{
    //绝对路径,后面拼接"dist"
    path:path.resolve(__dirname,"dist"),
    filename:"bundle.js",
    //以后代码涉及到url的东西,都会在路径前面加上该路径
    //为什么可以去掉了:因为index.html的位置发生了变化(位置和img同级),可以直接访问img了
    //publicPath:"dist/"

  },
  module: {
    rules: [
      {
        //这是个正则表达式
        test: /\.css$/i,
        /*
        * 第一步:css-loader只负责将css文件加载
        * 第二步:style-loader负责将样式添加到DOM中
        * 使用多个loader是,从右向左使用loader
        * */
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings:从JS字符串创建样式节点
        }, {
          loader: "css-loader" // translates CSS into CommonJS:将CSS转换为CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS:编译为CSS
        }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片,小于limit时,会将图片编译成base64的字符串形式(不会打包到dist中)
              //当加载的图片,大于limit时,会通过file-loader模块进行加载(会直接打包到dist中)
              limit: 8000,
              //将打包的图片文件放在img文件夹下,名字为 原文件名字+hash码8位+文件类型(为之前的文件类型)
              name: "img/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.js$/,
        //排除
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', //将es6转为es5
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use:{
          loader: 'vue-loader'
        }
      }

    ],
  },
  resolve:{
    //runtime-only:代码中不允许有任何的template
    //runtime-compiler:代码中可以有template,因为compiler可以编译template
    //使用vue.esm.js编译template
    alias:{
      "vue$":"vue/dist/vue.esm.js"
    },
    //这里配置了,就可以省略了
    extensions:[".js",".vue",".css"]
  },
  plugins:[
    //这个为webpack的内置插件(不需要额外下载的)
    //添加版权信息
    new webpack.BannerPlugin("最终版权归'傻狗'所有"),
    //自己安装的插件(可以在dist目录下生成index.html)
    new hemlwebpackplugin({
      template:"index.html"
    }),
    //压缩bundle.js文件
    new uglifyjswebpackplugin()
  ],
  //配置本地服务器
  devServer:{
    //管理的文件夹
    contentBase:"./dist",
    //局部刷新
    inline:true
  }
}