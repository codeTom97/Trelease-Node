class HomeController {
  get (ctx) {
    ctx.body = '欢迎使用繁灯网Node服务'
  }
}

module.exports = new HomeController()