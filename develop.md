# 开发
这里将简略描述 commpt-bot 的安装过程

## Mirai API HTTP 安装与配置

请参考 [Graia 官方文档 - Mirai API HTTP 安装](https://graia.cn/ariadne/appendix/mah-install/#mirai-api-http) 安装 Mirai API HTTP。

``` config/net.mamoe.mirai-api-http
# file: "MCL/config/net.mamoe.mirai-api-http/setting.yml"
## 配置文件中的值，全为默认值

## 启用的 adapter, 内置有 http, ws, reverse-ws, webhook
adapters:
  - http
  - ws

## 是否开启认证流程, 若为 true 则建立连接时需要验证 verifyKey
enableVerify: true
verifyKey: ServiceVerifyKey

## 开启一些调试信息
debug: false

## 是否开启单 session 模式, 不建议开启
singleMode: false

## 历史消息的缓存大小
## 同时，也是 http adapter 的消息队列容量
cacheSize: 4096

## adapter 的单独配置，键名与 adapters 项配置相同
adapterSettings:
  ## 详情看 http adapter 使用说明 配置
  http:
    host: localhost
    port: 8080
    cors: ["*"]

  ## 详情看 websocket adapter 使用说明 配置
  ws:
    host: localhost
    port: 8080
    reservedSyncId: -1
    # 建议确保为负数，否则可能出 bug
```

需要同时开启 `http` 和 `ws`。

## Mirai API HTTP 与 commspt-bot 互通

将 `commspt-bot` 拉取到本地并执行 `pip install -r requirements.txt` 安装所需依赖。

