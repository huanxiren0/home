const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath = '/';
const getHTMLplugin = (name,title)=>({
        template:'./src/view/'+name+'.html',
        filename:name+'.html',
        title:title,
        inject:true,
        chunks:['common',name]
    });

//导出配置
module.exports = {
	//模式
	mode:'development',
	//指定入口文件
	entry:{
    common:'./src/pages/common/index.js',
    index:'./src/pages/index/index.js',
    login:'./src/pages/login/index.js',
    register:'./src/pages/register/index.js',
    result:'./src/pages/result/index.js',
    'user-center':'./src/pages/usercenter/index.js',
    'user-updatepassword':'./src/pages/user-updatepassword/index.js'
  },
	//指定出口
	output:{
		//出口文件名称
		filename:'js/[name].js',
		//出口文件存储路径
		path:path.resolve(__dirname,'dist'),
    publicPath:publicPath,

	},
  resolve: {
    alias: {
      util: path.resolve(__dirname, './src/util/'),
      node_modules: path.resolve(__dirname, './node_modules'),
      common:path.resolve(__dirname, './src/pages/common/'),
      pages:path.resolve(__dirname,'./src/pages'),
      images:path.resolve(__dirname,'./src/images'),
    }
  },
  externals: {
    jquery: 'window.jQuery'
  },
	//配置loader
  module: {
    rules: [
    	//处理css文档的loader
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
            }
          },
          "css-loader"
        ]
      },
      //处理图片loader
	    {
        test: /\.(png|jpg|gif|woff2|eot|ttf|otf|svg|woff)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit:100,
              name: "resource/[name].[ext]"

            }
          }
        ]
    	},
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
               presets: ['env','es2015','react','stage-3'],
                //antd 按需加载
                plugins: [
                  ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
                ]
            }
        }
      },
      {
        test:/\.tpl$/,
        use:[{
            loader: 'html-loader'
         }
        ]
      }

    ]
  },
  plugins: [
  	new HtmlWebpackPlugin(getHTMLplugin('index','首页')),
    new HtmlWebpackPlugin(getHTMLplugin('login','用户登录')),
    new HtmlWebpackPlugin(getHTMLplugin('register','注个册啊')),
    new HtmlWebpackPlugin(getHTMLplugin('result','温馨提示')),
    new HtmlWebpackPlugin(getHTMLplugin('user-center','用户中心')),
    new HtmlWebpackPlugin(getHTMLplugin('user-updatepassword','用户修改密码')),
  	new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    })
  ],
  devServer: {
    contentBase: './dist',
    port:3001,
    proxy: {
      '/user': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true
      }
    }
  }
};
