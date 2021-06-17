import clamp from "clamp-js"
// 文本多行溢出
const ellipsis = {
  bind(el, binding) {
    clamp(el, {clamp: binding.value})
  },
  componentUpdated(el, binding) {
    clamp(el, {clamp: binding.value})
  }
}

export default ellipsis
