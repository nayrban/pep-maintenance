import AppHeader from '../Common/AppHeader'

export default {
  template: require('./Login.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      username: '',
      password: '',
      heading: {
        title: 'Login',
        description: 'Login stuff',
        icon: 'ti-lock'
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push('/')
      })
    }
  }
}
