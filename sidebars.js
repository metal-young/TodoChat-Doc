const sidebars = {
  docs: [
    {
      type: 'category',
      label: '概述',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        '01/intro.html',
      ],
    },
    {
      type: 'category',
      label: '方法论',
      collapsed: false,
      items: [
        '02/overlooking-time.html',
        '02/split-purpose.html',
        '02/start-at-one-percent.html',
        '02/focus-on-emergency.html',
      ]

    },
    {
      type: 'category',
      label: '使用指南',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        '05/shortcut-checklist.html',
      ],
    },

  ],
};
module.exports = sidebars;