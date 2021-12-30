module.exports = {
    // 每个页面的配置
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js'
        }
    },
    // 关闭语法检查
    lintOnSave: process.env.NODE_ENV !== 'production'
}