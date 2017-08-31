import AppHeader from '../Common/AppHeader'

export default {
  template: require('./Price32.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'Price32',
        description: 'Application used to maintain Client specific pricing for products, mostly custom products. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-dollar'
      }
    }
  }
}
