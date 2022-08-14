# LittleSkin 社区支持机器人使用手册

<h3>欢迎浏览 LittleSkin 社区支持机器人使用手册！</h3>

请阅读 [条例](tos.md) 了解使用机器人的相关条例。

你可以在 [指令](commands.md) 页面查看所有可以使用的指令，[功能](functions.md) 页面则列出了机器人支持的一些神秘功能。

::: tip

机器人手册已经试行使用 VuePress Next 版本！如果你在阅读时遇到了任何 Bug，欢迎在我们对应的 [GitHub 仓库](https://github.com/LittleSkinCommspt/commspt-bot-manual) 提交 Issue！

:::

***

::: warning 时效性
机器人可能会时常更新一些指令和功能，而并没有及时更新手册，因此本手册有可能落后于实际情况。具体请以源代码为准。
:::

::: tip 维护者
此机器人和文档均由 [LittleSkinCommspt](https://github.com/LittleSkinCommspt) 维护，[LittleSkin 运营组](https://github.com/LittleSkinChina) 以及 [CustomSkinLoader 开发人员](https://github.com/xfl03/MCCustomSkinLoader)提供了一些对开发有帮助的建议。

> _LittleSkinCommspt_ 指 LittleSkin 社区技术支持组，社区技术支持并非由运营组提供，但相关人员是由运营组钦定的。

此机器人及文档的主要维护者如下：

- [Xiao_Jin](https://github.com/jinzhijie) (developer) (Busy)
- [冰凌 sama](https://github.com/bingling-sama) (developer) (Busy)
- [FlyEmoji-表情酱](https://github.com/FLYEMOJ1) (document contributor) (Busy) (~~文档整活哥~~)
- [Cubik65536](https://github.com/Cubik65536) (document contributor) (Busy)
- [Fidel](https://github.com/Fidelxyz) (contributor) (Busy)
- [CursoR\_光标](https://github.com/CursoR-S) (maintainer) (Busy)
- [Restent Ou](https://github.com/Restent) (Publisher) (Free)
- 其他贡献者们 <sup>[[1]](https://github.com/LittleSkinCommspt/commspt-bot-manual/graphs/contributors) [[2]](https://github.com/LittleSkinCommspt/commspt-bot/graphs/contributors)</sup>

**📣 我们希望与你一起维护此项目**，如果你熟悉 Python3 的语法，能够理解 [现有代码](https://github.com/LittleSkinCommspt/commspt-bot) 以及 [Graia Framework](https://github.com/GraiaProject/Application) 的文档（如果还是 LittleSkin 的用户就更好了），欢迎联系我们！
:::

::: warning 与 Constance 的兼容性
为了方便用户交流，LittleSkin 运营组建立了在 _Telegram_ 和 _QQ_ 间转发消息的消息同步机器人 _Constance_。

由于 Constance 的特殊性，我们只能兼容大多数指令和功能。

如果你的 Telegram 昵称中含有 `:`（我们将此符号视为昵称与消息体的分隔符），机器人可能无法正常工作。  
由于 [UMR](https://github.com/JQ-Networks/UnifiedMessageRelay) 的局限性，在 Telegram 群组中试图 @ QQ 群成员时，机器人也可能无法正常工作。
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
