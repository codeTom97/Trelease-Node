const fs = require('fs')
const path = require('path')
const { makeDir } = require('../../core/dir')

class UploadController {
  get (ctx) {
    ctx.body = '欢迎使用繁灯网Node服务'
  }
  /**
   * 保存上传的文件
   * @param {*} ctx 
   */
  save (ctx) {
    const { file } = ctx.request.files
    const { remoteFilePath, resource = '/' } = ctx.request.body
    // 监听是否传入目录位置
    if (!remoteFilePath) throw new global.HttpException('请填写上传目录')
    const reader = fs.createReadStream(file.path); // 读取文件流
    let filePath = path.resolve(`../${remoteFilePath}/${resource}`); // 需要保存的目录, 包含二级目录
    let fileResource = `${filePath}/${file.name}`; // 文件全名
    if (!fs.existsSync(filePath)) {  //判断文件夹是否存在，如果不存在就新建一个
      makeDir(filePath) // 使用兼容写法 否则linux异常
    }
    let upstream = fs.createWriteStream(fileResource); // 开启写入文件流
    reader.pipe(upstream); // 写入操作
    ctx.body = {
      code: 1,
      url: `${filePath}/${file.name}`
    }
  }
}

module.exports = new UploadController()