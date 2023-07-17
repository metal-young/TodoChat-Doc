const sidebars = {
  docs: [
    'intro',  
    {
      type: 'category',
      label: 'theory',
      collapsed: false,
      items: [
        'overlooking-time',
        'split-purpose',
        'start-at-one-percent',
        'focus-on-emergency',
      ]

    },
    {
      type: 'category',
      label: 'how-to-use',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'shortcut-checklist',
      ],
    },

  ],
};
module.exports = sidebars;