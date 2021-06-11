---
home: true
heroText: vue-directive-zery
tagline: vue自定义指令扩展
footer: MIT Licensed | Copyright @ 2021-present Zery Chou
actionText: 快速上手 →
actionLink: /guide/
---

# 安装方便
```bash
npm i -S vue-directive-zery
// or
yarn add vue-directive-zery
```
# 使用简单
```javascript
import Vue from 'Vue'
import zery from 'vue-directive-zery'
Vue.use(zery)
```
# 按需加载，防止冲突
```javascript
import Vue from 'Vue'
import zery from 'vue-directive-zery'
zery.use(['clickoutside', 'watermarker', 'copy', 'debounce', 'limitText'])
Vue.use(zery)
```
