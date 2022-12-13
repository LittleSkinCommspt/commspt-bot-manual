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
- **`&ot`**  '这里不是闲聊的地方！' 引导在 LittleSkin 主用户群闲聊的用户前往 Honoka Café

## &cafe
- **`&ot`**  温柔地建议用户前往 Honoka Café 水群

::: tip
`&ot` 和 `&cafe` 功能仅限在 LittleSkin 用户大群中使用，其他群中机器人对于此命令将不会响应。
:::

## &manual
- **`&manual`** '您先看看手册吧 ~~我给您跪下了~~' 引导用户查看 [「LittleSkin 用户手册」](https://manual.littlesk.in)来寻找答案

## &mail
- **`&mail`** '您这个问题可以发邮件和我们探讨探讨' 引导用户向 `support📧littlesk.in` 发送邮件工单

## &msoauth
- **`&msoauth`** 引导使用 Microsoft OAuth 注册 LittleSkin 的用户修改密码

## &pro_verify
- **`&pro_verify`** 告知用户 LittleSkin 绑定正版的用处 '~~别再用 LittleSkin 外置登录加入 Hypixel 了~~'

## &network
- **`&network`** '~~网怎么又挂了~~' 引导用户在自身网络出现问题时排错并检查是否使用了过时的域名

## &browser
- **`&browser`** '~~哇 您这浏览器是上世纪八十年代的东西吧~~' 引导用户更换浏览器

## &cape_format
- **`&cape_format`** 引导用户上传格式合法有效的披风文件

## &view
- **`&view <player_name>`** 获取`<player_name>`的皮肤预览
- **`&view.mojang <player_name>`** 获取`<player_name>`的正版皮肤预览

## &csl
- **`&csl <player_name>`** 获取`<player_name>`的角色信息并返回该玩家的材质哈希值
- **`&csl.latest forge`** 获取最新的 Forge 版 CustomSkinLoader
- **`&csl.latest fabric`** 获取最新的 Fabric 版 CustomSkinLoader
- **`&csl.log`** 引导用户找到并上传 CustomSkinLoader 日志至群聊
- **`&csl.gui`** 获取 CustomSkinLoaderGUI 最新地址

## &ygg
- **`&ygg <player_name>`** 获取`<player_name>`的角色信息并返回该玩家的材质哈希值以及 UUID
- **`&ygg.latest`** 获取 authlib-injector 最新版本
- **`&ygg.server.jvm`** 引导用户添加服务端参数并将产生的日志上传直群文件
- **`&ygg.nsis`** No Skin in Server，引导用户需正确配置服务端
- **`&ygg.client.refresh`** 引导用户刷新客户端 Yggdrasil 认证用户状态
- **`&ygg.url`** 提示添加认证服务器时需要填入的 URL

## &log.*
- **`&log.minecraft`** 引导用户导出 Minecraft 客户端的日志
- **`&log.launcher`** 引导用户导出启动器的日志

## &*.latest
- **`&java.latest`** 引导用户下载 BellSoft Liberica JDK 17
- **`&java8.latest`** 引导用户下载 BellSoft Liberica JDK 8
- **`&hmcl.latest`** 引导用户下载 HMCL 启动器

::: warning
接下来的指令需要对机器人具有管理权限，并且机器人需要有群管理权限。
:::

## &recall
- **`&recall`** '~~又是什么见不得人的话题~~' 撤回回复的消息，并撤回此消息

## &mute @*
- **`&mute @*`** '哥们你违反群规了！' 禁言被 @ 成员 10 分钟

## &unmute @*
- **`&unmute @*`** '自由的感觉真好' 解除被 @ 成员的禁言
