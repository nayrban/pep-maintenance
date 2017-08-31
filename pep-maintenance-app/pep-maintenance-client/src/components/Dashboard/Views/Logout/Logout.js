import AppHeader from '../Common/AppHeader'

export default {
  template: require('./Logout.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      username: '',
      password: '',
      heading: {
        title: 'Logout',
        description: 'Logout',
        icon: 'ti-lock'
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    }
  },
  mounted () {
    this.logout()
  }
}
