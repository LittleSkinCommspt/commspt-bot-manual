# 开发
这里将简略描述 commspt-bot 的安装过程

## Mirai API HTTP 安装与配置

请参考 [Graia 官方文档 - Mirai API HTTP 安装](https://graia.cn/ariadne/appendix/mah-install/#mirai-api-http) 安装 Mirai API HTTP。

``` config/net.mamoe.mirai-api-http
# file: "MCL/config/net.mamoe.mirai-api-http/setting.yml"

## 启用 http, ws
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

重命名 `settings.py.env` 为 `settings.py` 并修改参数。

``` settings.py
from graia.ariadne.connection.config import (
    WebsocketClientConfig,
    config,
)

class specialqq(object):
    constance = constance_qid #同步机器人 QQ 号
    littleskin_main = 586146922 #LittleSkin 用户大群 QQ 群号
    littleskin_cafe = 651672723 #Honoka Cafe QQ 群号
    commspt_group = group_qid #LittleSkin 社区群 QQ 群号
    csl_group = 651287593 #CustomSkinLoader QQ 群号
    notification_channel = group_qid #LittleSkin 社区通知群 QQ 群号
    dev_group = group_qid #QQ 开发群


commandSymbol = '&'


Connection = config(
    bot_qid, #Bot 的 QQ 号，应与 Mirai API HTTP 登录的 QQ 号一致
    "verifyKey_of_http_adapter", #MCL/config/net.mamoe.mirai-api-http/setting.yml 中配置的 verifyKey
    WebsocketClientConfig("http://localhost:8080"),  #MCL/config/net.mamoe.mirai-api-http/setting.yml 中配置的 WebSocket Adapters 的 host 和 port
)

```
