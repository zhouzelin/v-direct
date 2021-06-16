// 文本多行溢出
const textOverflow = function (el, binding) {
  el.style.display = '-webkit-box'
  el.style.textOverflow = 'ellipsis'
  el.style.WebkitBoxOrient = 'vertical'
  el.style.overflow = 'hidden'
  el.style.WebkitLineClamp = binding.value
}

export default textOverflow
