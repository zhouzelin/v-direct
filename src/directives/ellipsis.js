// 文本多行溢出
const ellipsis = {
  bind(el, binding) {
    handler(el, binding)
  },
  componentUpdated(el, binding) {
    handler(el, binding)
  }
}

function handler(el, binding) {
  const line = binding.value || 1
  el.style.overflow = 'hidden'
  el.style.textOverflow = 'ellipsis'
  if (line === 1) {
    el.style.whiteSpace = 'nowrap'
  } else {
    el.style.WebkitBoxOrient = 'vertical'
    el.style.display = '-webkit-box'
    el.style.WebkitLineClamp = line
  }
}

export default ellipsis
