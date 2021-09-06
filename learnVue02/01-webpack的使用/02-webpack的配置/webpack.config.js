//"path"为node.js中定义的
const path = require("path");
module.exports={
  //入口
  entry:'./src/main.js',
  //出口
  output:{
    //绝对路径,后面拼接"dist"
    path:path.resolve(__dirname,"dist"),
    filename:"bundle.js"
  }
}