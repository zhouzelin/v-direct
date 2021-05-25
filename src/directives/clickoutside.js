// 点击元素外部触发事件
let $el, onClickoutside
export default {
  bind(el, binding) {
    $el = el
    onClickoutside = binding.value
    document.addEventListener('click', handler)
  },
  unbind(el, binding) {
    $el = el
    onClickoutside = binding.value
    document.removeEventListener('click', handler)
  }
}

function handler (e) {
  if ($el && !$el.contains(e.target)) {
    onClickoutside(e)
  }
}
