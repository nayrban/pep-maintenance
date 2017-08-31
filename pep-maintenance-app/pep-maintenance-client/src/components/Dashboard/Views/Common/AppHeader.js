export default {
  template: require('./AppHeader.html'),
  props: {
    icon: {
      type: String
    },
    heading: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  data () {
    return {}
  }
}
