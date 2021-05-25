// 防抖
let timer, handler

const handlerClick = () => {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(handler, 1000)
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
