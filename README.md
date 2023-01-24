# LittleSkin 社区支持机器人使用手册

<h3>欢迎浏览 LittleSkin 社区支持机器人使用手册！</h3>

请阅读 [条例](tos.md) 了解使用机器人的相关条例。

你可以在 [指令](commands.md) 页面查看所有可以使用的指令，[功能](functions.md) 页面则列出了机器人支持的一些神秘功能。

您也可以查阅 [维护者](maintainer.md) 一页以了解有关信息。

::: tip

机器人手册已经试行使用 VuePress Next 版本！如果你在阅读时遇到了任何 Bug，欢迎在我们对应的 [GitHub 仓库](https://github.com/LittleSkinCommspt/commspt-bot-manual) 提交 Issue！

:::

***

::: warning 时效性
机器人可能会时常更新一些指令和功能，而并没有及时更新手册，因此本手册有可能落后于实际情况。具体请以源代码为准。
:::

::: warning 与消息同步机器人的兼容性
为了方便用户交流，LittleSkin Community 建立了在 *Telegram* 和 *QQ* 间转发消息的消息同步机器人。

由于消息同步机器人的特殊性，机器人无法响应由消息同步机器人从 Telegram 转发到 QQ 群的指令。

<!-- 由于消息同步机器人的特殊性，我们只能兼容大多数指令和功能。-->

<!-- 如果你的 Telegram 昵称中含有 `:`（我们将此符号视为昵称与消息体的分隔符），机器人可能无法正常工作。  
由于 [UMR](https://github.com/JQ-Networks/UnifiedMessageRelay) 的局限性，在 Telegram 群组中试图 @ QQ 群成员时，机器人也可能无法正常工作。-->

:::

::: tip 源代码
得益于 [Mirai](https://github.com/mamoe/mirai) & [mirai-http-api](https://github.com/project-mirai/mirai-api-http) & [Graia Framework](https://github.com/GraiaProject/Application) 等优秀的开源项目，我们使用 [Python3](https://www.python.org/) 开发了这个机器人。

我们使用 AGPL-3.0 作为许可证，与上游项目保持一致。

你可以在 [GitHub](https://github.com/LittleSkinCommspt/commspt-bot) 找到此机器人的源代码，我们欢迎你为 LittleSkin 做出任何贡献！ ~~即使是“微小的工作”~~

欢迎打开新的 [Issues](https://github.com/LittleSkinCommspt/commspt-bot/issues) 进行探讨交流。我们将会聆听您宝贵的意见。
:::

::: tip 许可证
手册中的所有内容，除非特别说明，均以 [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 授权使用。在引用此手册中的内容时，请注意遵守许可协议。

本文中的部分内容引用自 [LittleSkin 用户使用手册](https://manual.littlesk.in/)。
:::
