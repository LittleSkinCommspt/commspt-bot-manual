module.exports = {
  title: 'LittleSkin 社区支持机器人使用手册',
  lang: 'zh-CN',
  description: 'LittleSkin 社区支持机器人使用手册',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    externalLinks: { target: '_blank' },
  },
  themeConfig: {
    contributors: false,
    docsRepo: 'https://github.com/LittleSkinCommspt/commspt-bot-manual',
    docsBranch: 'master',
    editLinkText: '帮助我们完善这个页面',
    logo: '/favicon.png',
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
    ],
    smoothScroll: true,
    lastUpdated: '上次更新',
  },
  evergreen: true,
};
