import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.messages = {
  NO_RESULT: '검색 결과가 없습니다'
}

ResultView.setup = function (el) {
  this.init(el)
}

ResultView.render = function (data = []) {
  console.log(tag, 'render()', data)
  this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT
  this.show()
}

ResultView.getSearchResultsHtml = function (data) {
  debugger
}

export default ResultView