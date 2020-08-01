const fs = require('fs')
const path = require('path')
const { makeDir } = require('../../core/dir')

class UploadController {
    /**
     * 保存上传的文件
     * @param {*} ctx 
     */
    save (ctx) {
        const { file } = ctx.request.files;
        const { bucket = 'Trelease_Project', resource = '/' } = ctx.request.body;

        let filePath = path.resolve(`../${bucket}`); // 需要保存的目录

        // 首次监听仓库是否建立 没有则先创建
        if (!fs.existsSync(filePath)) {
          makeDir(filePath);
        };

        const reader = fs.createReadStream(file.path); // 读取文件流

        // 对一级目录进行处理
        let _resource = resource === './' ? '/' : resource;

        // 二次组装地址, 包含多级目录
        filePath = path.resolve(`../${bucket}/${_resource}`);

        // 监听是否已经建立目录, 过滤.文件
        if (resource.indexOf('.') === -1 && !fs.existsSync(filePath)) {
          makeDir(filePath) // 使用兼容写法 否则linux异常
        }

        let fileResource = `${filePath}/${file.name}`; // 文件全名
        let upstream = fs.createWriteStream(fileResource); // 开启写入文件流

        reader.pipe(upstream); // 写入操作

        ctx.body = {
          code: 0,
          url: `${filePath}/${file.name}`
        }

    }
}

module.exports = new UploadController()