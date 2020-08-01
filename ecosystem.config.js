module.exports = {
    apps : [{
      name: "trelease_node",                        // 应用名称
      script: "./app.js",                           // 启动文件
      instances: 1,                                 // 启动实例
      error_file: "./logs/app-err.log",             // 错误日志文件
      out_file: "./logs/app-out.log",               // 正常日志文件
      merge_logs: true,                             // 设置追加日志而不是新建日志
      log_date_format: "YYYY-MM-DD HH:mm:ss",       // 指定日志文件的时间格式
      autorestart: true,                            // 发生异常自动重启
      watch: false,                                 // 监听文件
      max_memory_restart: "1G",                     // 内存如果占满1G则重启
      restart_delay: 60,                            // 异常60S重启
      env: {
        NODE_ENV: "production"                      // 环境变量
      },
    }],
  }