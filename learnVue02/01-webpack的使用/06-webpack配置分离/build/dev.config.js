//开发时需要的配置
const webpackmerge = require("webpack-merge")
const baseconfig = require("./base.config.js")
module.exports=webpackmerge(baseconfig,{
  //配置本地服务器
  devServer:{
    //管理的文件夹
    contentBase:"./dist",
    //局部刷新
    inline:true
  }})
