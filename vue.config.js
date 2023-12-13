module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  },
  lintOnSave:false, //关闭语法检查
  //开启代理服务器（方式一）
  /* devServer: {
    proxy: 'http://localhost:5000'
  }, */

  //开启代理服务器（方式一）
  devServer: {
    proxy: {
      '/qsl': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/qsl':''}
        // ws: true, // 用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值 react 框架里面不写默认的是false
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/demo':''}
        // ws: true, // 用于支持websocket
        // changeOrigin: true //用于控制请求头中的host值 react 框架里面不写默认的是false
      }
    }  
  }
}