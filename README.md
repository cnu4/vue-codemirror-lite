# Vue-Codemirror-Lite

[CodeMirror](http://codemirror.net/) Component For Vue.js (support 1.x and 2.x).

[中文文档](https://github.com/cnu4/vue-codemirror-lite/blob/master/README_CN.md)

## Lightweight

By default (to optimise bundle size) all modes and addons are not included. To enable them, see [Using Language Modes and Addons](#using-language-modes-and-addons).

## Demo

Live Demo: [https://cnu4.github.io/vue-codemirror-lite](https://cnu4.github.io/vue-codemirror-lite)

To run the demo locally, run

`npm install && npm run dev`

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

### Usage in Component

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

## Using Language Modes and Addons

Several [language modes](https://codemirror.net/mode/) are included with CodeMirror.

By default (to optimise bundle size) all modes and addons are not included. To enable:

 - install `vue-codemirror-lite` 
 - require the language modes or addons after you require `vue-codemirror-lite` itself
 - set the mode option in the options object

```html
<template>
  <codemirror :options="{
    mode: 'javascript',
    extraKeys: {'Ctrl-Space': 'autocomplete'}
  }"></codemirror>
</template>

<script>
  import { codemirror } from 'vue-codemirror-lite'
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/vue/vue')

  require('codemirror/addon/hint/show-hint.js')
  require('codemirror/addon/hint/show-hint.css')
  require('codemirror/addon/hint/javascript-hint.js')

  export default {
    ...
  }
</script>
```

See the demo source which implement JavaScript and vue syntax highlighting and JavaScript hint addon.

See the [CodeMirror Manual](http://codemirror.net/doc/manual.html) for the more modes and addons.


## License
MIT
