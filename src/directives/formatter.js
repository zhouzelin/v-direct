import dayjs from "dayjs"
import numeral from 'numeral'
import {getAttr} from '@/utils/utils'

// 全局变量
let $el, $format
const formatter = {
  bind(el, binding) {
    $el = el
    $format = binding.value
    handler()
  },
  componentUpdated(el, binding) {
    $el = el
    $format = binding.value
    handler()
  }
}

function handler() {
  const $text = getAttr($el, 'formatter-value', '')
  const $perfix = getAttr($el, 'formatter-perfix', '')
  const $suffix = getAttr($el, 'formatter-suffix', '')
  let ret = $text
  if (/\d/.test($format)) {
    ret = numeral($text).format($format)
  } else {
    ret = dayjs($text).format($format)
  }
  $el.innerText = $perfix + ret + $suffix
}

export default formatter
