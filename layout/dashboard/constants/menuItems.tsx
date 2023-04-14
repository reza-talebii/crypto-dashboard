type MenuItem = Required<MenuProps>['items']
import { MenuProps } from 'antd'
import { Icons } from '@/components/customIcons'
import { ROUTES } from '@/models/enums'
import { signOutHandler } from '@/utils/signOut'

export const dashboardMenuItems: MenuItem = [
  {
    label: 'داشبورد',
    icon: <Icons name="home" />,
    key: ROUTES.dashboard,
  },
  {
    label: 'خرید و فروش',
    icon: <Icons name="exchange" />,
    key: 'exchange',
  },
  {
    label: 'گزارش بازار',
    icon: <Icons name="reportMarket" />,

    key: 'charts',
  },
  {
    label: 'کیف پول',
    icon: <Icons name="wallet" />,

    key: 'wallet',
  },
  {
    label: 'خروج',
    icon: <Icons name="logout" />,
    key: ROUTES.home,
    onClick: () => signOutHandler(),
    className: 'logOut',
  },
]
