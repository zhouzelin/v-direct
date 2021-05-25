// 复制
let $value, $success, $empty

const copy = {
  bind(el, binding) {
    $value = binding.value.text
    $success = binding.value.success || noop
    $empty = binding.value.empty || noop
    el.addEventListener('click', handler)
  },
  unbind(el) {
    el.removeEventListener('click', handler)
  },
  componentUpdated(el, binding) {
    $value = binding.value.text
    $success = binding.value.success || noop
    $empty = binding.value.empty || noop
  }
}

const handler = () => {
  if (!$value) {
    $empty()
    return
  }
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
