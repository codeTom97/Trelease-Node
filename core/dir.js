const fs = require('fs')
const path = require('path')

/**
 * 生成目录
 * @param {*} dirpath 
 */
const makeDir = (dirpath) => {
  if (!fs.existsSync(dirpath)) {
    let pathtmp
    dirpath.split('/').forEach(dirname => {
      if (pathtmp) {
        pathtmp = path.join(pathtmp, dirname)
      } else {
        // 在linux系统中，第一个dirname的值为空，所以赋值为"/"
        dirname ? pathtmp = dirname : pathtmp = '/'
      }
      if (!fs.existsSync(pathtmp)) {
        if (!fs.mkdirSync(pathtmp))
          return false
      }
    });
  }
  return true
}

module.exports = {
  makeDir
}