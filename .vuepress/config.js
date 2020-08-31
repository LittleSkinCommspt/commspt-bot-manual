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
      ['/commands', '指令'],
    ],
    smoothScroll: true,
    lastUpdated: '上次更新',
  },
  evergreen: true,
};
