import AppHeader from '../Common/AppHeader'

export default {
  template: require('./SpecialBill.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'Special Bill',
        description: 'SpecialBill allows special billing on a per-order basis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-asterisk'
      }
    }
  }
}
