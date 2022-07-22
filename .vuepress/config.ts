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
  theme: defaultTheme({
    docsRepo: 'https://github.com/LittleSkinCommspt/commspt-bot-manual',
    docsBranch: 'master',
    editLinkPattern: ':repo/edit/:branch/:path',
    editLinkText: '帮助我们完善这个页面',
    lastUpdatedText: '上次更新',
    contributors: false,
    sidebar: [
      {
        text: '欢迎页',
        link: '/',
      },
      {
        text: '条例',
        link: '/tos.html',
      },
      {
        text: '指令',
        link: '/commands.html',
      },
      {
        text: '功能',
        link: '/functions.html',
      },
      {
        text: 'TOS 违规公告',
        link: '/hall-of-jail.html',
      },
    ],
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
  evergreen: true,
})
