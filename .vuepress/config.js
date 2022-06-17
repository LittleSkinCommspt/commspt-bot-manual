const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

module.exports = {
  title: 'LittleSkin 社区支持机器人使用手册',
  description: 'LittleSkin 社区支持机器人使用手册',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    externalLinks: { target: '_blank' },
  },
  themeConfig: {
    docsRepo: 'LittleSkinCommspt/commspt-bot-manual',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '帮助我们完善这个页面',
    sidebar: [
      ['/', '欢迎页'],
      ['/tos', '条例'],
      ['/commands', '指令'],
      ['/functions', '功能'],
      ['/hall-of-jail', 'TOS 违规公告'],
    ],
    smoothScroll: true,
    lastUpdated: '上次更新',
  },
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  evergreen: true,
};
