export default {
  template: '#list',
  props: ['data', 'type'],
  methods: {
    onClickList(keyword) {
      this.$emit('@click', keyword)
    },
    onRemoveList(keyword) {
      this.$emit('@remove', keyword)
    }
  }
}