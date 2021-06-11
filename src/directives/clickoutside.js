// 点击元素外部触发事件
let $el, onClickoutside, clicked = false
export default {
  bind(el, binding) {
    $el = el
    onClickoutside = binding.value
    el.addEventListener('click', handlerClick)
    document.addEventListener('click', handler)
  },
  unbind(el, binding) {
    $el = el
    onClickoutside = binding.value
    document.removeEventListener('click', handler)
  }
}

function handlerClick(e) {
  if (!clicked) {
    clicked = true
  }
}

function handler (e) {
  if ($el && !$el.contains(e.target) && clicked) {
    onClickoutside(e)
    clicked = false
  }
}
