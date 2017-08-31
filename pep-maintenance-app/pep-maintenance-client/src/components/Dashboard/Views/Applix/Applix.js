import AppHeader from '../Common/AppHeader'

export default {
  template: require('./Applix.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'Applix',
        description: 'Applix is a collection of Client Relationship Management (CRM) packaged software. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-users'
      }
    }
  }
}
