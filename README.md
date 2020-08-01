## Trelease-node 为Trelease

`tip: 目前通过Trelease上传的项目, 会保存在与Trelease-node同一位置`

## 更新管理
[x] 已全面兼容[Trelease2.1.4^](https://github.com/codeTom97/Trelease)自定义服务器模式
[x] 加入pm2配置文件
[] web操作界面
[] 实现自动化部署
[] 版本回滚, 发布日志


### 使用方法

拉取项目
```
git clone https://github.com/codeTom97/Trelease-Node.git
```

启动项目(服务端)
```
npm run prod

&

# 必须全局安装pm2(npm install pm2 -g)

pm2 start ecosystem.config.js
```