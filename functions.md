# 功能

这个页面列出了机器人目前支持的一些~~神必~~功能，这些功能可能会遭遇破坏性变更。

::: warning 温馨警告
此页面中的一些内容涉及到正则表达式，如果你不懂这是什么，还不[去看](https://www.runoob.com/regexp/regexp-tutorial.html)！
:::

[[toc]]

::: tip 解释
<br />
 带有 <Badge text="未实装" type="warning"/> 的功能表示该功能仍未被开发完成。

 > Q: 为什么写不完呢？<br/>
 > A: ~~诶我就是懒得写，就是玩~~
:::

## 解析 CustomSkinLoader 日志

当群成员在群中上传了 CustomSkinLoader 的日志文件 `CustomSkinLoader.log` 后，机器人将自动下载文件并解析日志，提取关键信息并提供问题报告。

:::tip
目前机器人主要会检测四方面错误：
- 是否在 Minecraft 1.7.10 中加载了 Alex 模型的皮肤
- 是否使用过时的 CustomSkinLoader 版本
- 是否出现网络请求超时
- 是否出现连接重置
- 是否出现 SSL 错误
:::

## 生草复读机
当群成员在群内发出符合正则表达式 `^草+$` 的消息时，机器人将回复 `草\u202e`，`\u202e` 是一个 Unicode 控制字符（RLO），旨在防止 QQ 的 `+1`（~~禁止随地生草!~~）。
<panel-view title="生草复读机">
<chat-message nickname="Alex" color="#cc0066">草草草</chat-message>
<chat-message nickname="Bot" :avatar="$withBase('/favicon.png')">草</chat-message>
</panel-view>

## 敏感词检测
<Badge text="未实装" type="warning"/> 当群成员在群内发出的消息中含有敏感词列表中的词语时，将产生以下示例对话。敏感词无法在此文档中展示，如需了解请自行翻阅源码。
<panel-view title="敏感词检测">
<chat-message nickname="Alex" color="#cc0066">富强民主\&lt;敏感词\>文明和谐</chat-message>
<chat-message nickname="Bot" :avatar="$withBase('/favicon.png')">请不要在此群中讨论有关话题！</chat-message>
</panel-view>

## 我就是想问「为什么」
一般来说，在 LittleSkin 主用户群中的提问者在提问词中不免提到「为什么」这三个字。当提问者的问题符合正则表达式 `^为什么.*` 或 `^请问.*` 或 `^问一下.*` 时，此消息将会被**回复**到运营组与社区技术支持组的通知群内，以方便我们处理问题。
::: warning
因为回答者和提问者主用户群中解决问题时难免会遇到反问句，而反问句往往会踩中正则表达式，为了通知群的简洁，机器人在识别到符合正则表达式的消息后，会再次检测是否符合反问语序的正则表达式，包括 `^为什么要.*`，`^怎么能.*`，`^怎么这样.*`，`^干嘛.*`，`^干吗.*`，`^怎么可以.*`，`^难道.*`。
:::
如果你注意到其他的提问词或反问词，请提交一个 [issues](https://github.com/LittleSkinCommspt/commspt-bot/issues/new/choose)。


<!-- ## 自动刷新群名片
### 当新成员入群时
此时的机器人会根据不同的群聊发送不同的消息，但这些群聊中都含有 Constance 消息转发机器人。一个基本的示例对话如下。
<panel-view title="新成员入群">
<chat-message nickname="系统消息" color="#cc0066">老八加入了本群</chat-message>
<chat-message nickname="Bot" :avatar="$withBase('/favicon.png')">!!name</chat-message>
</panel-view>

### 当群成员修改群名片时
我们假定：*群成员 A* 修改群名片后，*群成员 B* 发送了一条消息。通常来说，修改群名片的事件将会在 *B* 发出消息的同时触发 ~~（鹅厂特色）~~。 -->
