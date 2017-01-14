var Vue = require('vue')
var VueCodeMirror = require('../index')

Vue.use(VueCodeMirror)

var codes = {
  javascript: 'var component = {\n\tname: "vue-codemirror-lite",\n\tauthor: "Fangxw",\n\trepo: "https://github.com/cnu4/vue-codemirror-lite"\n}\n\n//Press Ctrl-Space to trigger hint',
  vue: '<template>\n<codemirror :value="code"></codemirror>\n</template>\n\n<script>\nimport { codemirror } from "vue-codemirror-lite"\nexport default {\n\tdata () {\n\t\treturn {\n\t\t\tcode: "const str = \"hello world\""\n\t\t}\n\t},\n\tcomponents: {\n\t\tcodemirror\n\t}\n}\n</script>'
}

// require htmlmixed mode
require('codemirror/mode/vue/vue.js')
require('codemirror/mode/javascript/javascript.js')

// require hint addon for javacript
require('codemirror/addon/hint/show-hint.js')
require('codemirror/addon/hint/show-hint.css')
require('codemirror/addon/hint/javascript-hint.js')

var app = new Vue({
  el: '#app',
  data: function () {
    return {
      mode: 'javascript'
    }
  },
  computed: {
    code: function () {
      return codes[this.mode]
    },
    options: function () {
      return {
        mode: this.mode,
        tabSize: 2,
        lineNumbers: true,
        lineWrapping: true,
        extraKeys: {'Ctrl-Space': 'autocomplete'},
      }
    }
  },
  methods: {
    change: function (code) {
      console.log('change', code)
    }
  }
})