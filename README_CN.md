# Vue-Codemirror-Lite

[CodeMirror](http://codemirror.net/) Component For Vue.js (support 1.x and 2.x).

## Lightweight

为了减少打包后的体积，所有的语言模式和插件在默认的情况下没有加载, 要使用它们，见 [使用语言模式和插件](#使用语言模式和插件).

## Demo

Live Demo: [https://cnu4.github.io/vue-codemirror-lite](https://cnu4.github.io/vue-codemirror-lite)

本地运行实例：

`npm install && npm run dev`

查看在浏览器运行的例子 [JSFiddle](https://jsfiddle.net/cnu4/r33vk618)

## 安装

### npm

`npm install vue-codemirror-lite`

```js
// Install the plugin
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

### 浏览器

在页面中引用打包后的文件

`<script src="https://unpkg.com/vue-codemirror-lite/dist/vuecodemirror.min.js"></script>`

安装

`Vue.use(VueCodeMirror)`

或者注册为一个组件

`Vue.component('codemirror', VueCodeMirror.codemirror)`

CodeMirror 被打包进了 `vuecodemirror.min.js`，通过下面语句获取 `CodeMirror`

`window.CodeMirror = VueCodeMirror.CodeMirror`

查看在浏览器运行的例子 [JSFiddle](https://jsfiddle.net/cnu4/r33vk618)


## 用法

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

 - `value` `String` 编辑器的值
 - `options` `Object (newValue)` 传递给 CodeMirror 实例的配置选项

前往 [CodeMirror Configuration](http://codemirror.net/doc/manual.html#config) 查看更多可用选项

## 使用语言模式和插件

CodeMirror 中包含了许多的语言模式

默认情况下所有的语言模式和插件在默认的情况下没有加载， 启用它们：
v
 - 安装 `vue-codemirror-lite`
 - require `vue-codemirror-lite` 后 require 一个语言模式或者插件 (如果你是在浏览器中使用了构建后的版本，你需要手动引入 CodeMirror 相关 mode 和插件的脚本文件，完整的例子看这里 [JSFiddle](https://jsfiddle.net/cnu4/r33vk618))
 - 在 options 对象中配置 mode 选项

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

demo 目录下的例子实现了 JavaScript 和 vue 语法高亮和 JavaScript 代码提示

前往 [CodeMirror Manual](http://codemirror.net/doc/manual.html) 查看更多的语言模式和插件.


## License
MIT
