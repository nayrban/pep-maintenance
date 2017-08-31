import AppHeader from '../Common/AppHeader'

export default {
  template: require('./Logo32.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'Logo32',
        description: '<strong>[Out of Scope-Seriously-Out of Scope]</strong> Delphi application used to define scaling and positioning of custom logos and images for FIs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'ti-world'
      }
    }
  }
}
