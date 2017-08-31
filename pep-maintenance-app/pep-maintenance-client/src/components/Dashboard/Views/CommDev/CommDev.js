import AppHeader from '../Common/AppHeader'

export default {
  template: require('./CommDev.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'CommDev',
        description: 'The CommDev application is a utility to maintain logo driven upcharge. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-file-image-o'
      }
    }
  }
}
