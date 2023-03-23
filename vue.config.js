'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: process.env.port || '8088',
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8081', // 接口的域名
                // secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
                // pathRewrite: {
                //     '^/api': ''
                // }
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
}