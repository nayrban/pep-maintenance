import AppHeader from '../Common/AppHeader'

export default {
  template: require('./WinProd.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'WinProd',
        description: 'WinProd is the global product data setup application which manages the data for every product that can be order through the Liberty order entry programs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-globe'
      }
    }
  }
}
