import {getAttr} from '@/utils/utils'
// 滚动文字
let timer = null
let $el
const marquee = {
  bind(el) {
    $el = el
    window.addEventListener('resize', handler)
  },
  inserted(el) {
    $el = el
    handler()
  },
  componentUpdated() {
    $el = el
    handler()
  },
  unbind() {
    window.removeEventListener('resize', handler)
  }
}

function handler(el) {
  clearInterval(timer)
  timer = null
  // 获取属性值
  const scrollAmount = getAttr($el, 'marquee-scroll-amount', 6)
  let scrollDelay = getAttr($el, 'marquee-scroll-delay', 85)
  if (scrollDelay < 60) {
    scrollDelay = 60
  }
  $el.parentNode.style.overflow = 'hidden'
  $el.parentNode.style.whiteSpace = 'nowrap'
  if ($el.style.display !== 'block') {
    $el.style.display = 'block'
  }
  const boxWidth = $el.parentNode.offsetWidth
  // 创建移动元素
  const elWidth = $el.scrollWidth
  let distance = 0
  // 判断条件
  if (elWidth > boxWidth) {
    distance = boxWidth
    timer = setInterval(() => {
      if (Math.abs(distance) >= elWidth) {
        distance = boxWidth
      } else {
        distance -= scrollAmount
      }
      $el.style.transform = `translateX(${distance}px)`
    }, scrollDelay)
  }
}
export default marquee
