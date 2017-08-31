import AppHeader from '../Common/AppHeader'

export default {
  template: require('./LogoPreview.html'),
  components: {
    AppHeader
  },
  data () {
    return {
      heading: {
        title: 'Logo Preview',
        description: '<strong>[Out of Scope-Seriously-Out of Scope]</strong> Preview how logos look on stock, screening and scaling, etc.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        icon: 'ti-world'
      }
    }
  }
}
