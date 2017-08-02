var CodeMirror = require('codemirror/lib/codemirror.js')
import CmComponent from './codemirror.vue'

function install (Vue) {
  Vue.component('codemirror', CmComponent)
}

export default {
  install
}
export {
  CodeMirror,
  CmComponent as codemirror
}
