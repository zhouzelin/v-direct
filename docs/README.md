---
home: true
heroText: v-direct
tagline: vue自定义指令扩展
footer: MIT Licensed | Copyright @ 2021-present Zery Chou
actionText: 快速上手 →
actionLink: /guide/
---

# 安装方便
```bash
npm i -S v-direct
// or
yarn add v-direct
```
# 使用简单
```javascript
import Vue from 'Vue'
import direct from 'v-direct'
Vue.use(direct)
```
# 按需加载，防止冲突
```javascript
import Vue from 'Vue'
import direct from 'v-direct'
direct.use(['clickOutside', 'watermarker', 'copy', 'debounce', 'limitText'])
Vue.use(direct)
```
