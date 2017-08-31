import AppHeader from '../Common/AppHeader'
import App from './App'

export default {
  template: require('./AccountType.html'),
  components: {
    AppHeader,
    App
  },
  data () {
    return {
      heading: {
        title: 'Account Type',
        description: 'Applix is a collection of Client Relationship Management (CRM) packaged software. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'fa fa-university'
      }
    }
  }
}
