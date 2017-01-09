var CodeMirror = require('codemirror/lib/codemirror.js')
var CmComponent = require('./codemirror.vue')

module.exports = {
  CodeMirror: CodeMirror,
  codemirror: CmComponent,
  install: function (Vue) {
    Vue.component('codemirror', CmComponent)
  }
}
