export default {
  template: require('components/Dashboard/Layout/TopNavbar.html'),
  computed: {
    routeName () {
      const {name} = this.$route
      return this.capitalizeFirstLetter(name)
    },
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    },
    canAccessApp (appName) {
      return this.$store.getters.canAccessApp(appName)
    }
  },
  data () {
    return {
      activeNotifications: false
    }
  },
  methods: {
    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    toggleNotificationDropDown () {
      this.activeNotifications = !this.activeNotifications
    },
    closeDropDown () {
      this.activeNotifications = false
    },
    toggleSidebar () {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
    },
    hideSidebar () {
      this.$sidebar.displaySidebar(false)
    }
  }
}
