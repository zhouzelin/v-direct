const path = require('path')

function resolve(_path) {
  console.log(path.resolve(__dirname, _path))
  return path.resolve(__dirname, _path)
}

module.exports = {
  title: 'vue-directive-zery',
  description: 'vue自定义指令扩展',
  host: '127.0.0.1',
  port: '8090',
  base: '/zery/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/zhouzelin/vue-directive-zery/'}
    ],
    sidebar: [
      '/guide/clickOutside',
      '/guide/copy',
      '/guide/debounce',
      '/guide/draggable',
      '/guide/ellipsis',
      '/guide/focus',
      '/guide/formatter',
      '/guide/fullScreen',
      '/guide/infiniteScroll',
      '/guide/lazyLoad',
      '/guide/limitText',
      '/guide/longpress',
      '/guide/marquee',
      '/guide/permission',
      '/guide/watermarker'
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('../../src'),
        'comps': resolve('../../src/components'),
        'styles': resolve('../../src/styles'),
        'views': resolve('../../src/views'),
        'dirs': resolve('../../src/directives'),
        'routers': resolve('../../src/routers'),
        'utils': resolve('../../src/utils'),
        'assets': resolve('../../assets')
      }
    }
  }
}