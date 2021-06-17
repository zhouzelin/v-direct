// 复制
import {getAttr} from '@/utils/utils'
let $value, $success

const copy = {
  bind(el, binding) {
    $value = getAttr(el, 'copy-text', '')
    $success = binding.value || noop
    el.addEventListener('click', handler)
  },
  unbind(el) {
    el.removeEventListener('click', handler)
  },
  componentUpdated(el, binding) {
    $value = getAttr(el, 'copy-text', '')
    $success = binding.value || noop
  }
}

const handler = () => {
  const textarea = document.createElement('textarea')
  textarea.readOnly = 'readonly'
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  textarea.value = $value
  document.body.appendChild(textarea)
  textarea.select()
  const result = document.execCommand('Copy')
  if (result) {
    $success($value)
  }
  document.body.removeChild(textarea)
}

const noop = () => {}

export default copy
