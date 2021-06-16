import {getAttr} from '@/utils/utils'
// 滚动文字
let timer = null
const marquee = {
  inserted(el, binding) {
    // 获取属性值
    const width = getAttr(el, 'marquee-width', '')
    const bgColor = getAttr(el, 'marquee-bgcolor', '')
    const scrollAmount = getAttr(el, 'marquee-scroll-amount', 6)
    let scrollDelay = getAttr(el, 'marquee-scroll-delay', 85)
    if (scrollDelay > 60) {
      scrollDelay = 60
    }
    el.style.overflow = 'hidden'
    el.style.whiteSpace = 'nowrap'
    if (width) {
      el.style.width = width + 'px'
    }
    const HTML = el.innerHTML
    el.innerHTML = ''
    const boxWidth = el.offsetWidth
    // 创建移动元素
    const span = document.createElement('div')
    span.innerHTML = HTML
    if (bgColor) {
      span.style.backgroundColor = bgColor
    }
    el.appendChild(span)
    const spanWidth = span.scrollWidth
    console.log(spanWidth)
    let distance = 0
    // 判断条件
    if (spanWidth > boxWidth) {
      distance = boxWidth
      timer = setInterval(() => {
        if (Math.abs(distance) >= spanWidth) {
          distance = boxWidth
        } else {
          distance -= scrollAmount
        }
        span.style.transform = `translateX(${distance}px)`
      }, scrollDelay)
    }
  },
  unbind(el) {
    clearInterval(timer)
    timer = null
  }
}

export default marquee
