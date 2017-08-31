import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage'

// Admin pages
import Login from 'src/components/Dashboard/Views/Login/Login'
import Logout from 'src/components/Dashboard/Views/Logout/Logout'
import Overview from 'src/components/Dashboard/Views/Overview'
import UserProfile from 'src/components/Dashboard/Views/UserProfile'
import Notifications from 'src/components/Dashboard/Views/Notifications'
import Icons from 'src/components/Dashboard/Views/Icons'
import Maps from 'src/components/Dashboard/Views/Maps'
import Typography from 'src/components/Dashboard/Views/Typography'
import TableList from 'src/components/Dashboard/Views/TableList'

import AccountType from 'src/components/Dashboard/Views/AccountType/AccountType'
import Applix from 'src/components/Dashboard/Views/Applix/Applix'
import BranchPrenote from 'src/components/Dashboard/Views/BranchPrenote/BranchPrenote'
import ChangeOrder from 'src/components/Dashboard/Views/ChangeOrder/ChangeOrder'
import CommDev from 'src/components/Dashboard/Views/CommDev/CommDev'
import Contracts from 'src/components/Dashboard/Views/Contracts/Contracts'
import CustomProduct from 'src/components/Dashboard/Views/CustomProduct/CustomProduct'
import LogoPreview from 'src/components/Dashboard/Views/LogoPreview/LogoPreview'
import Logo from 'src/components/Dashboard/Views/Logo32/Logo32'
import MessageMgmt from 'src/components/Dashboard/Views/MessageMgmt/MessageMgmt'
import PreAuth from 'src/components/Dashboard/Views/PreAuth/PreAuth'
import Price32 from 'src/components/Dashboard/Views/Price32/Price32'
import PriceList from 'src/components/Dashboard/Views/PriceList/PriceList'
import Ship32 from 'src/components/Dashboard/Views/Ship32/Ship32'
import SpecialBill from 'src/components/Dashboard/Views/SpecialBill/SpecialBill'
import WinBranch from 'src/components/Dashboard/Views/WinBranch/WinBranch'
import WinCheck from 'src/components/Dashboard/Views/WinCheck/WinCheck'
import WinProd from 'src/components/Dashboard/Views/WinProd/WinProd'

import store from '../store'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    beforeEnter: store.getters.requireAuth,
    redirect: '/admin/overview'
  },
  {
    path: '/login',
    component: DashboardLayout,
    children: [
      {
        path: '/',
        name: 'login',
        component: Login
      }
    ]
  },
  {
    path: '/logout',
    component: DashboardLayout,
    children: [
      {
        path: '/',
        name: 'logout',
        component: Logout
      }
    ]
  },
  {
    path: '/admin',
    component: DashboardLayout,
    beforeEnter: store.getters.requireAuth,
    redirect: '/admin/stats',
    children: [
      {
        path: 'overview',
        name: 'overview',
        beforeEnter: store.getters.requireAuth,
        component: Overview
      },
      {
        path: 'stats',
        name: 'stats',
        beforeEnter: store.getters.requireAuth,
        component: UserProfile
      },
      {
        path: 'notifications',
        name: 'notifications',
        beforeEnter: store.getters.requireAuth,
        component: Notifications
      },
      {
        path: 'icons',
        name: 'icons',
        beforeEnter: store.getters.requireAuth,
        component: Icons
      },
      {
        path: 'maps',
        name: 'maps',
        beforeEnter: store.getters.requireAuth,
        component: Maps
      },
      {
        path: 'typography',
        name: 'typography',
        beforeEnter: store.getters.requireAuth,
        component: Typography
      },
      {
        path: 'table-list',
        name: 'table-list',
        beforeEnter: store.getters.requireAuth,
        component: TableList
      },
      {
        path: 'account-type',
        name: 'account-type',
        beforeEnter: store.getters.requireAuth,
        component: AccountType
      },
      {
        path: 'applix',
        name: 'applix',
        beforeEnter: store.getters.requireAuth,
        component: Applix
      },
      {
        path: 'prenote',
        name: 'prenote',
        beforeEnter: store.getters.requireAuth,
        component: BranchPrenote
      },
      {
        path: 'change-order',
        name: 'change-order',
        beforeEnter: store.getters.requireAuth,
        component: ChangeOrder
      },
      {
        path: 'comm-dev',
        name: 'comm-dev',
        beforeEnter: store.getters.requireAuth,
        component: CommDev
      },
      {
        path: 'contracts',
        name: 'contracts',
        beforeEnter: store.getters.requireAuth,
        component: Contracts
      },
      {
        path: 'cust-prod',
        name: 'cust-prod',
        beforeEnter: store.getters.requireAuth,
        component: CustomProduct
      },
      {
        path: 'logo-preview',
        name: 'logo-preview',
        beforeEnter: store.getters.requireAuth,
        component: LogoPreview
      },
      {
        path: 'logo32',
        name: 'logo32',
        beforeEnter: store.getters.requireAuth,
        component: Logo
      },
      {
        path: 'message-management',
        name: 'message-management',
        beforeEnter: store.getters.requireAuth,
        component: MessageMgmt
      },
      {
        path: 'pre-auth',
        name: 'pre-auth',
        beforeEnter: store.getters.requireAuth,
        component: PreAuth
      },
      {
        path: 'price32',
        name: 'price32',
        beforeEnter: store.getters.requireAuth,
        component: Price32
      },
      {
        path: 'price-list',
        name: 'price-list',
        beforeEnter: store.getters.requireAuth,
        component: PriceList
      },
      {
        path: 'ship32',
        name: 'ship32',
        beforeEnter: store.getters.requireAuth,
        component: Ship32
      },
      {
        path: 'special-bill',
        name: 'special-bill',
        beforeEnter: store.getters.requireAuth,
        component: SpecialBill
      },
      {
        path: 'win-branch',
        name: 'win-branch',
        beforeEnter: store.getters.requireAuth,
        component: WinBranch
      },
      {
        path: 'win-check',
        name: 'win-check',
        beforeEnter: store.getters.requireAuth,
        component: WinCheck
      },
      {
        path: 'win-prod',
        name: 'win-prod',
        beforeEnter: store.getters.requireAuth,
        component: WinProd
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
