import AppHeader from '../Common/AppHeader'

export default {
  template: require('./WinCheck.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'WinCheck',
        description: 'WinCheck is the primary application used to manage check, accessory, payment book, and counter check orders from order entry through order fulfillment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-pencil-square-o'
      }
    }
  }
}
