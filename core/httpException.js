/**
 * 中间件 Http异常处理
 */

class HttpException extends Error {
  constructor ( msg = '服务器异常', code = 500, errorCode = 10000) {
    super()
    this.errorCode = errorCode;
    this.code = code;
    this.msg = msg
  }
}

class NotFound extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.msg = msg || '内容未找到';
    this.error_code = errorCode || 10000;
    this.code = 404
  }
}

module.exports = {
  NotFound,
  HttpException
}