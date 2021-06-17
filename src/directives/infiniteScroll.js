import {getAttr} from '@/utils/utils'
// 无限滚动
let $btm, $callback, $el, $delay, $distance, $disabled
const infiniteScroll = {
  bind(el) {
    init(el)
  },
  inserted(el, binding) {
    $callback = binding.value
    $delay = getAttr(el, 'infinite-scroll-delay', 200)
    $distance = getAttr(el, 'infinite-scroll-distance', 0)
    $disabled = getAttr(el, 'infinite-scroll-disabled', false)
    listenerScroll()
  },
  componentUpdated(el, binding) {
    $callback = binding.value
    $delay = getAttr(el, 'infinite-scroll-delay', 200)
    $distance = getAttr(el, 'infinite-scroll-distance', 0)
    $disabled = getAttr(el, 'infinite-scroll-disabled', false)
  },
  unbind(el) {
    el.removeEventListener('scroll', () => {
      handler()
    })
  }
}

// 初始化
function init(el) {
  $el = el
  $el.style.overflow = "auto"
}
// 监听scroll事件
function listenerScroll() {
  const handler = throttle(load, $delay)
  load($btm)
  $el.addEventListener('scroll', () => {
    handler()
  })
}
// 加载真实图片
function load() {
  const clientHeight = $el.clientHeight
  const scrollHeight = $el.scrollHeight
  const scrollTop = $el.scrollTop
  if (scrollHeight - clientHeight - scrollTop <= $distance && !$disabled) {
    $callback()
  }
}
// 节流
function throttle(fn, delay) {
  let timer
  let prevTime
  return function (...args) {
    const currTime = Date.now()
    const context = this
    if (!prevTime) prevTime = currTime
    clearTimeout(timer)

    if (currTime - prevTime > delay) {
      prevTime = currTime
      fn.apply(context, args)
      clearTimeout(timer)
      return
    }

    timer = setTimeout(function () {
      prevTime = Date.now()
      timer = null
      fn.apply(context, args)
    }, delay)
  }
}

export default infiniteScroll