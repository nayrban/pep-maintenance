import AppHeader from '../Common/AppHeader'

export default {
  template: require('./MessageMgmt.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'Message Management',
        description: 'Apparently a system for Message Management. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-envelope-o'
      }
    }
  }
}
