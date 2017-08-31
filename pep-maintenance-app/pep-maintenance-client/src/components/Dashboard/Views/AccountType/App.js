import AppHeader from '../Common/AppHeader'

export default {
  template: require('./App.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      checkboxValue: {
        one: null
      }
    }
  }
}
