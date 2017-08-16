//这个文件是webpack工具的配置文件，可以使用node的各种内置模块和写法
const path = require('path');
// 可自动把构建好的js脚本引入到html中
const htmlWebpackPlugin = require('html-webpack-plugin');

// 导出一个配置对象，webpack在启动时会根据配置内容进行打包
module.exports = {
  //打包的文件
  entry: './src/js/main.js',
  //输出的文件
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'buld.js'
  },
  //文件额外处理插件配置,可自动把构建好的js脚本引入到html中
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  //对不同文件类型进行配置
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'css-loader',
          'style-loader',
          'less-loader',
        ]
      },
      {
        // 把html文件内容以字符串的形式引入
        test: /\.html$/,
        use: [
          'html-loader',
        ]
      },
      // 图片，先压缩，然后打包成js模块，其中小图片会转成base64，大图片仍然为url引用
      {
        test: /\.(png|jpg|gif|ttf)$/,
        use: [
          { loader: 'url-loader', options: { limit: 10000 } },
          'image-webpack-loader',
        ]
      },
      // 可把es6、es7等浏览器暂不支持的语法规范编写的js脚本，解析为浏览器支持的es5标准脚本。
      {
        test: /\.js$/,
        exclude: /node_modules/,//排除第三方插件
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
              plugins: ['transform-runtime']
            }
          }
        ]
      },
      //配置vue文件的解析转换
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      //配置vue-preview文件代码编译
      {
        test: /vue-preview.src.*?js$/,
        loader: 'babel'
      }
    ]
  }
}
