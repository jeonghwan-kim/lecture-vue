export default {
  template: '#tabs',
  props: ['tabs', 'selectedTab'],
  methods: {
    onClickTab(tab) {
      this.$emit('@change', tab)
    }
  }
}