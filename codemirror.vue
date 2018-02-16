<template>
  <div class="vue-codemirror-wrap">
    <textarea></textarea>
  </div>
</template>

<script>
  var CodeMirror = require('codemirror/lib/codemirror.js')
  require('codemirror/lib/codemirror.css')
  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default: function () {
          return {
            mode: 'text/javascript',
            lineNumbers: true,
            lineWrapping: true
          }
        }
      },
    },
    data: function () {
      return {
        skipNextChangeEvent: false
      }
    },
    ready: function () {
      var _this = this
      this.editor = CodeMirror.fromTextArea(this.$el.querySelector('textarea'), this.options)
      this.editor.setValue(this.value)
      this.editor.on('change', function(cm) {
        if (_this.skipNextChangeEvent) {
          _this.skipNextChangeEvent = false
          return
        }
        _this.value = cm.getValue()
        if (!!_this.$emit) {
          _this.$emit('change', cm.getValue())
        }
      })
    },
    mounted: function () {
      var _this = this
      this.editor = CodeMirror.fromTextArea(this.$el.querySelector('textarea'), this.options)
      this.editor.setValue(this.value)
      this.editor.on('change', function(cm) {
        if (_this.skipNextChangeEvent) {
          _this.skipNextChangeEvent = false
          return
        }
        if (!!_this.$emit) {
          _this.$emit('change', cm.getValue())
          _this.$emit('input', cm.getValue())
        }
      })
    },
    watch: {
      'value': function (newVal, oldVal) {
        var editorValue = this.editor.getValue()
        if (newVal !== editorValue) {
          this.skipNextChangeEvent = true
          var scrollInfo = this.editor.getScrollInfo()
          this.editor.setValue(newVal)
          this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
        }
      },
      'options': function (newOptions, oldVal) {
        if (typeof newOptions === 'object') {
          for (var optionName in newOptions) {
            if (newOptions.hasOwnProperty(optionName)) {
              this.editor.setOption(optionName, newOptions[optionName])
            }
          }
        }
      }
    },
    beforeDestroy: function () {
      if (this.editor) {
        this.editor.toTextArea()
      }
    }
  }
</script>

<style>
  .CodeMirror-code {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  }
</style>
