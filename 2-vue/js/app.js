new Vue({
  el: '#app',
  data: {
    query: ''
  },
  methods: {
    onSubmit(e) {
      debugger
    },
    onKeyup(e) {
      if (!this.query.length) this.resetForm()
    },
    onReset(e) {
      this.resetForm()
    },
    resetForm() {
      this.query = ''
      // todo remove results ..
      debugger
    }
  }
})