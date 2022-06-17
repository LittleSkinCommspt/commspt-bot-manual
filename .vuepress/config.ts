const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
import { defineUserConfig } from 'vuepress'
const { defaultTheme } = require('@vuepress/theme-default')

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'LittleSkin 社区机器人使用手册',
  description: 'LittleSkin 社区机器人使用手册',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    externalLinks: { target: '_blank' },
  },
  theme: defaultTheme({
    sidebar: [
      ['/', '欢迎页'],
      ['/tos', '条例'],
      ['/commands', '指令'],
      ['/functions', '功能'],
      ['/hall-of-jail', 'TOS 违规公告'],
    ],
  }),
  themeConfig: {
    docsRepo: 'LittleSkinCommspt/commspt-bot-manual',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们完善这个页面',
    smoothScroll: true,
    lastUpdated: '上次更新',
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  evergreen: true,
})
