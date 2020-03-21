class HomeController {
  get (ctx) {
    ctx.body = '欢迎使用Trelease-Node服务'
  }
}

module.exports = new HomeController()