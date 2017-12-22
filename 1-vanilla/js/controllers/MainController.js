import FormView from '../views/FormView.js'

const tag = '[MainController]'

export default {
  init() {
    FormView.setup(document.querySelector('form'))
  },
}