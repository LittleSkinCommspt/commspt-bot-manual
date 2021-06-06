# 指令
这里列出了机器人支持的所有指令。


[[toc]]
::: tip 提示
下文使用以下格式编写  
`<command> <args>` *description*
:::

---
## &ping
- **`&ping`** 存活测试，将回复操作者发出的 `&ping` 指令

## &help
- **`&help`** 指令帮助，引导用户查看该文档

## &ot
- **`&ot`**  '这里不是闲聊的地方！' 引导在LittleSkin 主用户群与CSL交流群闲聊的用户前往咖啡馆

## &manual
- **`&manual`** '您先看看手册吧 ~~我给您跪下了~~' 引导用户查看LittleSkin用户手册来寻找答案

## &domain
- **`&domain`** '~~哟 这又来一个被百度毒害的用户~~' 引导用户使用其他的域名访问LittleSkin

## &mail
- **`&mail`** '您这个问题可以发邮件和我们探讨探讨' 引导用户向 `support📧littlesk.in` 发送邮件工单

## &browser
- **`&browser`** '~~哇 您这浏览器是上世纪八十年代的东西吧~~' 引导用户更换浏览器

## &view
- **`&view <player_name>`** 获取`<player_name>`的材质预览

## &csl
- **`&csl <player_name>`** 获取`<player_name>`的角色信息并返回该玩家的材质哈希值
- **`&csl.latest`** 获取 CustomSkinLoader 最新版本
- **`&csl.log`** 引导用户找到并上传 CustomSkinLoader 日志至 [https://pastebin.aosc.io/](https://pastebin.aosc.io/)
- **`&csl.gui`** 获取 CustomSkinLoaderGUI 最新地址

## &ygg
- **`&ygg <player_name>`** 获取`<player_name>`的角色信息并返回该玩家的材质哈希值以及UUID
- **`&ygg.latest`** 获取 authlib-injector 最新版本
- **`&ygg.server.jvm`** 引导用户添加服务端参数并将产生的日志上传直群文件
- **`&ygg.nsis`** No Skin in Server，引导用户需正确配置服务端
- **`&ygg.client.refresh`** 引导用户刷新客户端 Yggdrasil 认证用户状态
- **`&ygg.url`** 提示添加认证服务器时需要填入的 URL
