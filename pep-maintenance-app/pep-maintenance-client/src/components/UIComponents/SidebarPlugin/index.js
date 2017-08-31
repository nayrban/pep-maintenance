import Sidebar from './SideBar'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Login',
      icon: 'ti-lock',
      path: '/login'
    },
    {
      name: 'Dashboard',
      icon: 'ti-panel',
      path: '/admin/overview'
    },
    {
      name: 'Account Type',
      icon: 'fa fa-university',
      path: '/admin/account-type'
    },
    {
      name: 'Applix',
      icon: 'fa fa-users',
      path: '/admin/applix'
    },
    {
      name: 'Branch Prenote',
      icon: 'fa fa-exchange',
      path: '/admin/prenote'
    },
    {
      name: 'Change Order',
      icon: 'fa fa-list',
      path: '/admin/change-order'
    },
    {
      name: 'CommDev',
      icon: 'fa fa-file-image-o',
      path: '/admin/comm-dev'
    },
    {
      name: 'Contracts',
      icon: 'fa fa-file-text-o',
      path: '/admin/contracts'
    },
    {
      name: 'Custom Products',
      icon: 'fa fa-shopping-bag',
      path: '/admin/cust-prod'
    },
    {
      name: 'Logo Preview',
      icon: 'ti-world',
      path: '/admin/logo-preview'
    },
    {
      name: 'Logo32',
      icon: 'ti-world',
      path: '/admin/logo32'
    },
    {
      name: 'Message Management',
      icon: 'fa fa-envelope-o',
      path: '/admin/message-management'
    },
    {
      name: 'Pre Auth',
      icon: 'fa fa-refresh',
      path: '/admin/pre-auth'
    },
    {
      name: 'Price32',
      icon: 'fa fa-usd',
      path: '/admin/price32'
    },
    {
      name: 'PriceList',
      icon: 'fa fa-usd',
      path: '/admin/price-list'
    },
    {
      name: 'Ship32',
      icon: 'fa fa-truck',
      path: '/admin/ship32'
    },
    {
      name: 'Special Bill',
      icon: 'fa fa-asterisk',
      path: '/admin/special-bill'
    },
    {
      name: 'WinBranch',
      icon: 'fa fa-database',
      path: '/admin/win-branch'
    },
    {
      name: 'WinCheck',
      icon: 'fa fa-pencil-square-o',
      path: '/admin/win-check'
    },
    {
      name: 'WinProd',
      icon: 'fa fa-globe',
      path: '/admin/win-prod'
    },
    {
      name: 'Icons',
      icon: 'ti-pencil-alt2',
      path: '/admin/icons'
    },
    {
      name: 'User Profile',
      icon: 'ti-user',
      path: '/admin/stats'
    },
    {
      name: 'Table List',
      icon: 'ti-view-list-alt',
      path: '/admin/table-list'
    },
    {
      name: 'Typography',
      icon: 'ti-text',
      path: '/admin/typography'
    },
    {
      name: 'Icons',
      icon: 'ti-pencil-alt2',
      path: '/admin/icons'
    },
    {
      name: 'Maps',
      icon: 'ti-map',
      path: '/admin/maps'
    },
    {
      name: 'Notifications',
      icon: 'ti-bell',
      path: '/admin/notifications'
    }
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
