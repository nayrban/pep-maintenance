import AppHeader from '../Common/AppHeader'

export default {
  template: require('./BranchPrenote.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'Branch Prenote',
        description: 'Branch Prenote is a system for entering prenotes into the billing system. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-exchange'
      }
    }
  }
}
