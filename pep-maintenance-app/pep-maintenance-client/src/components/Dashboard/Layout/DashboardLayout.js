import TopNavbar from './TopNavbar'
import ContentFooter from './ContentFooter'
import DashboardContent from './Content'

export default {
  template: require('components/Dashboard/Layout/DashboardLayout.html'),
  data () {
    return {
      sidebarStore: this.$sidebar.sidebarLinks
    }
  },
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent
  },
  methods: {
    toggleSidebar () {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    },
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    },
    canAccessApp (appName) {
      return this.$store.getters.canAccessApp(appName)
    },
    allowedApps () {
      let activeControl = this
      return this.sidebarStore.filter(function (link) {
        let allowed = activeControl.canAccessApp(link.path)
        console.log(link.path + ' [' + allowed + ']')
        return allowed
      })
    }
  }
}
