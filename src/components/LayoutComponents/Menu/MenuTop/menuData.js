export default [
  {
    title: 'Dashboard',
    key: 'dashboard',
    url: '/dashboard/alpha',
    icon: 'icmn icmn-home',
  },
  {
    title: 'Reports',
    key: 'Reports',
    url: '/dashboard/report',
    icon: 'icmn icmn-stats-bars',
    children: [
      {
        key: 'button',
        title: 'Statements',
        url: '/antdesign/button',
      },
      {
        key: 'grid',
        title: 'Data Studio',
        url: '/antdesign/grid',
      },
    ]
  },
  {
    title: 'User Feedback',
    key: 'empty',
    url: '/empty',
    icon: 'icmn icmn-twitch',
  },
]
