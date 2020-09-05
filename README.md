# LITTLESKIN COMMSPT-BOT MANUAL

<h3>欢迎浏览 LittleSkin 社区支持机器人使用手册！</h3>


你可以在 [指令](commands.md) 页面查看所有可以使用的指令，[功能](functions.md) 页面则列出了机器人支持的一些神必功能。

---

::: danger 关于滥用
任何人都可以合理的使用此机器人。滥用会导致你永久失去与机器人交互的权利。
:::

::: warning 时效性
机器人会经常对指令和功能做出更新，快速的更新导致文档中所述的内容可能会落后于实际情况，并且指令可能遭遇破坏性更改。请务必以源代码为准。
:::

~~要注意的是，**本文档暂时不具有有效性**。我们需要有人维护此文档，如果你有意愿，请往下看。~~

> 此文档已由 [bingling_sama](https://github.com/bingling-sama) 接手维护工作，同步 littleskin 社区支持鸡气壬进行更新

::: tip 维护者
此机器人和此文档均由 [LittleSkinCommspt](https://github.com/LittleSkinCommspt) 维护，[LittleSkin](https://littlesk.in/) 运营组以及 CustomSkinLoader 开发人员提供了一些对开发有帮助的建议。

> *LittleSkinCommspt* 指 LittleSkin 社区技术支持组，社区技术支持并非由运营组提供，但相关人员是由运营组钦定的。

此机器人及文档的主要维护者如下：
- [Xiao\_Jin](https://github.com/jinzhijie) (developer) （初三/忙碌）
- [Restent Ou](https://github.com/Restent) (maintainer) （初三/忙碌）
- [Fidel](https://github.com/Fidelxyz) (contributor) （高一/忙碌）
- [冰凌sama](https://github.com/bingling-sama) (contributor) （初三/忙碌）
- [CursoR_光标](https://github.com/CursoR-S) (maintainer) （开学/忙碌）

**📣 我们急需有人接手开发 & 维护此项目**，如果你熟悉 Python3 的语法，能够理解 [现有代码](https://github.com/LittleSkinCommspt/commspt-bot) 以及 [Graia Framework](https://github.com/GraiaProject/Application) 的文档（如果还是 LittleSkin 的用户就更好了），欢迎发送邮件到 `support📧commspt.littlesk.in`！
:::

::: warning 与 Constance 的兼容性
为了方便用户交流，LittleSkin 运营组建立了在 *Telegram* 和 *QQ* 间转发消息的消息同步机器人 *Constance*。

由于 Constance 的特殊性，我们只能兼容大多数指令和功能。

如果你的 Telegram 昵称中含有 `: `（我们将此符号视为昵称与消息体的分隔符），机器人可能无法正常工作。  
由于 [UMR](https://github.com/JQ-Networks/UnifiedMessageRelay) 的局限性，在 Telegram 群组中试图 @ QQ 群成员时，机器人也可能无法正常工作。
:::

::: tip 源代码
得益于 [Mirai](https://github.com/mamoe/mirai) & [mirai-http-api](https://github.com/project-mirai/mirai-api-http) & [Graia Framework](https://github.com/GraiaProject/Application) 等优秀的开源项目，我们使用 [Python3](https://www.python.org/) 开发了这个机器人。

我们使用 AGPL-3.0 作为许可证，与上游项目保持一致。

你可以在 [GitHub](https://github.com/LittleSkinCommspt/commspt-bot) 找到此机器人的源代码，我们欢迎你为 LittleSkin 做出任何贡献！ ~~即使可能有些微不足道~~

欢迎打开新的 [Issues](https://github.com/LittleSkinCommspt/commspt-bot/issues) 进行探讨交流。我们聆听你宝贵的意见。
:::

::: tip 许可证
手册中的所有内容，除非特别说明，均以 [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 授权使用。在引用此手册中的内容时，请注意遵守许可协议。

本文中的部分内容引用自 [LittleSkin 用户使用手册](https://manual.littlesk.in/)。
:::

[https://manual.littlesk.in/user-group.html#%E4%B8%BB%E7%94%A8%E6%88%B7%E7%BE%A4]: 