import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Doomsday Production',
  description: 'Advanced Black Hat Compilation & Automation Tools',
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/Getting_Started' },
      { text: 'Bootcamp', link: '/bootcamp/overview', collapsed: true },
      { text: 'Membership', link: '/content/Membership', collapsed: true }
    ],

    sidebar: [
      {
        text: '🎨 Bootcamp',
        collapsed: true, 
        items: [
          { text: 'Overview', link: '/bootcamp/overview' },
          { text: 'Tools Setup', link: '/bootcamp/tools' },
          { text: 'Carding', link: '/bootcamp/carding' },
          { text: 'Stealer Logs', link: '/bootcamp/stealer-logs' },
          { text: 'Config Collection', link: '/bootcamp/configs' },
          { text: 'Advanced', link: '/bootcamp/advanced' }
        ]
      },
      {
        text: '📝 Member Portal',
        collapsed: true,
        items: [
          { text: 'Search Data', link: '/member/search' },
          { text: 'View Results', link: '/member/results' },
          { text: 'Statistics', link: '/member/stats' }
        ]
      },
      {
        text: '📝 Membership Info',
        collapsed: true,
        items: [
          { text: 'Membership', link: '/content/Membership' },
          { text: 'Membership Levels', link: '/content/Membership_Levels' },
          { text: 'Limitations', link: '/content/Limitations' }
        ]
      },
      {
        text: '🎯 Requests',
        collapsed: true,
        items: [
          { text: 'URL Anatomy', link: '/interactive/url-anatomy' },
          { text: 'ULP Data', link: '/interactive/ulp-data' }
        ]
      },
      {
        text: '🎭 Programs & Configs',
        collapsed: true,
        items: [
          { text: 'Bullet Softwares', link: '/programs/bullet-softwares' },
          { text: 'Browser Automation Studio', link: '/programs/browser-automation' },
          { text: 'BL Tools', link: '/programs/bl-tools' }
        ]
      }
    ],
  },
  footer: {
      message: 'Advanced Black Hat Compilation & Automation Tools',
      copyright: '© 2024 Doomsday Production. All rights reserved.'
  }
});