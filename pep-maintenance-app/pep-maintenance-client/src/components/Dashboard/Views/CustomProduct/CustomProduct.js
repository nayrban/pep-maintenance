import AppHeader from '../Common/AppHeader'

export default {
  template: require('./CustomProduct.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'Contracts',
        description: 'Custom Products only purpose is to enable specific clients to order custom products not readily available to all clients. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-shopping-bag'
      }
    }
  }
}
