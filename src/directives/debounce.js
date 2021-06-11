// 防抖
let timer, handler

const handlerClick = (e) => {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => handler(e), 320)
}

const debounce = {
  bind(el, binding) {
    handler = binding.value
    el.addEventListener('click', handlerClick)
  },
  componentUpdated(el, binding) {
    handler = binding.value
  },
  unbind(el) {
    el.removeEventListener('click', handlerClick)
  }
}

export default debounce
