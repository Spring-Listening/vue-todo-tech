// const docsLoader = require()
// const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev)=>{
    return{
        preserveWhitespace:true,//识别html 的结构，有时会忽略一些空格的存在
        extractCSS: !isDev,//将css文件额外的打包出来
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase:true,//会把css 用 ‘-’ 连接的css变成  驼峰式的
        },
        // hotReload:false,//热重载    根据环境变量生成
        // loaders:{
        //     'docs': docsLoader
        // },
        // js:"coffe-loader",
        // preLoader:{
        //     js:''
        // },
        // postLoader:{}
    }
}