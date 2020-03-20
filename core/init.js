const path = require('path')
const requireDirectory = require('require-directory');
const Router = require('koa-router');
const { HttpException } = require('./httpException')

class InitCore {
  /**
   * 初始化操作
   * @param {*} app Koa
   */
  static InitCore (app) {
    InitCore.app = app;
    this.InitLoadRouters()
    this.InitHttpException()
  }

  static InitHttpException () {
    return global.HttpException = HttpException
  }

  /**
   * 自动导入路由模块
   */
  static InitLoadRouters () {
    const routesDirectory = `${path.resolve()}/app/routes`;
    requireDirectory(module, routesDirectory, {
      visit: this.whenLoadModule
    });
  }
  /**
   * 批量注册routes
   * @param obj
   */
  static whenLoadModule (obj) {
    // 判断requireDirectory加载的路由是否为KoaRouter
    if (obj instanceof Router) {
      InitCore.app.use(obj.routes());
    }
  }
}

module.exports = InitCore