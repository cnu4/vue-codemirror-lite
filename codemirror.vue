<template>
  <textarea></textarea>
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
    created: function () {
      this._onChangeHandler = function (cm) {
        if (this.$emit) {
          var v = cm.getValue();
          this.$emit('change', v)
          this.$emit('input', v)
        }
      }.bind(this);
    },
    ready: function () {
      if (!this.editor) {
        this.editor = CodeMirror.fromTextArea(this.$el, this.options)
        this.editor.setValue(this.value)
        this.editor.on('change', this._onChangeHandler)
      }
    },
    mounted: function () {
      if (!this.editor) {
        this.editor = CodeMirror.fromTextArea(this.$el, this.options)
        this.editor.setValue(this.value)
        this.editor.on('change', this._onChangeHandler)
      }
    },
    watch: {
      'value': function (newVal) {
        if (this.editor) {
          var editorValue = this.editor.getValue()
          if (newVal !== editorValue) {
            var scrollInfo = this.editor.getScrollInfo()
            this.editor.off('change', this._onChangeHandler)
            this.editor.setValue(newVal)
            this.editor.scrollTo(scrollInfo.left, scrollInfo.top)
            this.editor.on('change', this._onChangeHandler)
          }
        }
      },
      'options': function (newOptions) {
        var editor = this.editor;
        if (editor) {
          Object.keys(newOptions).forEach(function (optionName) {
            editor.setOption(optionName, newOptions[optionName])
          });
        }
      }
    },
    beforeDestroy: function () {
      if (this.editor) {
        this.editor.toTextArea()
        this.editor = undefined
      }
    }
  }
</script>

<style>
  .CodeMirror-code {
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  }
</style>