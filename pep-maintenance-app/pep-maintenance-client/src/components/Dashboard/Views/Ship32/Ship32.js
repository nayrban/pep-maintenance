import AppHeader from '../Common/AppHeader'

export default {
  template: require('./Ship32.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'Ship32',
        description: 'Ship32 is Liberty\'s global shipping information database containing all shipping price groups, shipping methods supported by Liberty. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-truck'
      }
    }
  }
}
