import AppHeader from '../Common/AppHeader'

export default {
  template: require('./PriceList.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'PriceList',
        description: 'Utility to generate and print batches of price lists, containing product names and prices (including upcharge and tax) of check products and accessories, for the required branches. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-dollar'
      }
    }
  }
}
