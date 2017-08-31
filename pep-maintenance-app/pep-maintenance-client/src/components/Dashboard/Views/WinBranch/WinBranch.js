import AppHeader from '../Common/AppHeader'

export default {
  template: require('./WinBranch.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'WinBranch',
        description: 'WinBranch is Liberty\'s main client information database. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-database'
      }
    }
  }
}
