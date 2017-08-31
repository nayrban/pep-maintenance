import AppHeader from '../Common/AppHeader'

export default {
  template: require('./PreAuth.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'PreAuth32',
        description: 'Application used to maintain integrations between Clients\' internal applications and Liberty online ordering applications (LOO/LDWeb). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-refresh'
      }
    }
  }
}
