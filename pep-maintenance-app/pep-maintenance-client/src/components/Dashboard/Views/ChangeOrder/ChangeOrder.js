import AppHeader from '../Common/AppHeader'

export default {
  template: require('./ChangeOrder.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'Change Order',
        description: 'The Change Order application is used by Field Support to make mass changes to account numbers, signline text, account types or fonts in check product orders. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-list'
      }
    }
  }
}
