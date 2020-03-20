const { HttpException } = require('../core/httpException');

const catchError = async (ctx, next) => {
  try {    
    await next()
  } catch (error) {
    console.log(error)
    const isHttpException = error instanceof HttpException
    // 异常处理
    if (isHttpException) {
      ctx.body = {
        code: 0,
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = error.code
    } else {
      ctx.body = {
        code: 0,
        msg: '服务器异常',
        error_code: 999,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.status = 500;
    }
  }
}

module.exports = catchError;