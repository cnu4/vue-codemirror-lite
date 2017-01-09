# Vue-Codemirror-Lite

[CodeMirror](http://codemirror.net/) Component For Vue.js (support 1.x and 2.x).

## Lightweight

By default (to optimise bundle size) all modes and addons are not included. To enable them, see Using Language Modes.
为了减少打包后的体积，所有的语言模式和插件在默认的情况下没有加载, 要使用它们，见 Using Language Modes

## Installation

`npm install vue-codemirror-lite`

## Usage

```js
// Require in Webpack
var Vue = require('vue')
var VueCodeMirror = require('vue-codemirror-lite')

Vue.use(VueCodeMirror)

// Or use as component (ES6)
import Vue from 'vue'
import { codemirror } from 'vue-codemirror-lite'

export default {
  components: {
    codemirror
  }
}
```

### Usage in component

```html

<!-- simple -->
<codemirror :value="code"></codemirror>

<!-- simple (with bindings in Vue1.x) -->
<codemirror :value.sync="code"></codemirror>

<!-- simple (with bindings in Vue2.x) -->
<codemirror v-model="code"></codemirror>

<!-- advanced -->
<codemirror
  :value="code"
  :options="editorOption"
  ref="myEditor"
  @change="yourCodeChangeMethod">
</codemirror>
```

```js
export default {
  data () {
    return {
      code: 'const str = "hello world"'
    }
  },
  computed: {
    editor() {
      // get current editor object
      return this.$refs.myEditor.editor
    }
  },
  mounted() {
    // use editor object...
    this.editor.focus()
    console.log('this is current editor object', this.editor)
  }
}
```

## Properties

 - `value` `String` the editor value
 - `options` `Object (newValue)` options passed to the CodeMirror instance

See the [CodeMirror Configuration](http://codemirror.net/doc/manual.html#config) for the available options.

## Using Language Modes

Several [language modes](https://codemirror.net/mode/)are included with CodeMirror.
CodeMirror 中包含了许多的语言模式

By default (to optimise bundle size) all modes and addons are not included. To enable:
默认情况下所有的语言模式和插件在默认的情况下没有加载， 启用它们：

 - install `vue-codemirror-lite` 
 安装 `vue-codemirror-lite`
 - require the language modes or addons after you require `vue-codemirror-lite` itself
 require `vue-codemirror-lite` 后 require 一个语言模式或者插件
 - set the mode option in the options object
 在 options 对象中配置 mode 选项

```html
<template>
  <codemirror :options="{
    mode: 'javascript',
    extraKeys: {'Ctrl-Space': 'autocomplete'}
  }"></codemirror>
</template>

<script>
  import { codemirror } from 'vue-codemirror'
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/markdown/markdown')

  require('codemirror/addon/hint/show-hint.js')
  require('codemirror/addon/hint/show-hint.css')
  require('codemirror/addon/hint/javascript-hint.js')

  export default {
    ...
  }
</script>
```

See the example source which implement JavaScript and markdown syntax highlighting and JavaScript hint addon.
这个例子实现了 JavaScript 和 markdown 语法高亮和 JavaScript 代码提示

See the [CodeMirror Manual](http://codemirror.net/doc/manual.html) for the more modes and addons.


## License
MIT
