import AppHeader from '../Common/AppHeader'

export default {
  template: require('./Contracts.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'Contracts',
        description: 'Contracts are Products &amp; Services Agreements or Amendments with concessions (i.e. price holds, caps, employee discounts, special pricing, etc.). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-file-text-o'
      }
    }
  }
}
