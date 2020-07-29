# 指令
这里列出了机器人支持的所有指令。

[[toc]]

::: tip 解释
<br />
 带有 <Badge text="仅管理员" type="warning"/> 的指令表示只有机器人管理员执行此指令才会生效。

**机器人管理员并非群管理员。** 管理员列表保存在 `admins.list` 中；而被封禁用户列表保存在 `blockusers.list` 中。
:::
::: tip 提示
下文使用以下格式编写  
`<command> <args>` *description*
:::

---

## $csl 
- **`$csl <player_name>`**  获取 `<player_name>` 的角色信息，同时返回材质预览
- 对角色名回复 **`$csl`** 使用被回复的消息中的文本作为角色名进行查询，同时返回材质预览
- **`$csl.log`** 引导用户上传 CustomSkinLoader 日志
- **`$csl.json`** 引导用户手动修改 CustomSkinLoader 的配置文件

## $ygg
- **`$ygg <player_name>`**  获取 `<player_name>` 的角色信息（含 UUID），同时返回 `provider` 为 LittleSkin 的材质预览
- 对角色名回复 **`$ygg`** 使用被回复的消息中的文本作为角色名进行查询，同时返回 `provider` 为 LittleSkin 的材质预览
- **`$ygg.nsis`**  *No Skin in Server*，提示用户需正确配置服务端

## $texture
- **`$texture <texture_hash>`**  获取材质预览

## $browser
- **`$browser`** 引导用户更换浏览器

## $mail
- **`$mail`** 引导用户提交邮件工单（通常不建议使用）

## $faq
- **`$faq`** 引导用户看常见问题解答

## $ot
- **`$ot`** 提示用户正在水群，并将其引导至咖啡馆

## $ban / $unban
- **`$ban <@somebody or QQnum>`** <Badge text="仅管理员" type="warning"/>  
    封禁 *被 @ 者* 或 *QQ 号主人*，被封禁的用户将不能操作机器人。执行者必须有管理员权限，管理员不能被封禁
- **`$unban <@somebody or QQnum>`** <Badge text="仅管理员" type="warning"/>  
    解封 *被 @ 者* 或 *QQ 号主人*，被解封的用户现在可以操作机器人。执行者必须有管理员权限

## $help
- **`$help`** 指令帮助，引导用户查看此页面