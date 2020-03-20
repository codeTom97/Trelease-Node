const path = require('path')
const koa = require('koa')
const body = require('koa-body')
const parameter = require('koa-parameter');
const core = require('./core/init') // 核心配置
const catchError = require('./middlewares/exception')
const app = new koa()

const PROT = 12305  // 中间层环境

/*
* 添加全局异常拦截
* */
app.use(catchError);

app.use(parameter(app))

app.use(body({
  multipart: true, // 支持文件上传
  formidable: {
    keepExtensions: true // 保持文件的后缀
  }
}))

// 初始化核心配置
core.InitCore(app)

app.listen(PROT, () => {
  console.log(`NODE中间层已经开启, 端口号为: ${PROT}`)
})