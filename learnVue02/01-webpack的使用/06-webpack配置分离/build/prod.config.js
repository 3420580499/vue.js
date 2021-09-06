//运行时需要的配置
const uglifyjswebpackplugin = require("uglifyjs-webpack-plugin")
const webpackmerge = require("webpack-merge")
const baseconfig = require("./base.config.js")
module.exports=webpackmerge(baseconfig,{
  plugins:[
    //压缩bundle.js文件
    new uglifyjswebpackplugin()
  ],
})