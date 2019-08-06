const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    // 部署生产环境和开发环境下的URL。
  // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上
  //例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 baseUrl 为 /my-app/。
      //baseUrl 从 Vue CLI 3.3 起已弃用，请使用publicPath
    //baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
    publicPath: "/",
    // baseUrl: '/', // 根域上下文目录
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录（js, css, img, fonts）
    lintOnSave: false, // 是否开启esLint保存检测，有效值：true | false | 'error'
    runtimeCompiler: true, // 运行时版本是否需要编译 
    transpileDependencies: [], // 默认babel-loader忽略node_modules,这里可增加例外的依赖包名
    productionSourceMap: true, // 是否在构建生产包时生成sourceMap文件，false将提高构建速度 
    configureWebpack: config => { // webpack配置，值为对象时会合并配置，为方法时会改写配置
        if (debug) {
            // 开发环境配置
            config.devtool = 'cheap-module-eval-source-map'
        } else {
            // 生产环境配置
        }
    },
    chainWebpack: config => { // webpack链接API，用于生成和修改webpack配置，https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
        if (debug) {
            // 本地开发配置
        } else {
            // 生产开发配置
        }
    },
    parallel: require('os').cpus().length > 1, // 构建时开启多进程处理babel编译
    pluginOptions: {
        // 第三方插件配置
    },
    pwa: {
        // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http://localhost:5000/api/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app => {}
    }
}