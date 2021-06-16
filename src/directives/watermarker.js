import {getAttr} from '@/utils/utils'
// 给整个页面添加背景水印
function addWaterMarker(str, el) {
  // 水印文字，父元素，字体，文字颜色
  var can = document.createElement('canvas')
  can.width = getAttr(el, 'watermarker-width', 200)
  can.height = getAttr(el, 'watermarker-height', 150)
  can.style.display = 'none'
  var ctx = can.getContext('2d')
  const fontSize = getAttr(el, 'watermarker-font-size', 16)
  const fontFamily = getAttr(el, 'watermarker-font-family', 'Microsoft YaHei')
  const rotate = getAttr(el, 'watermarker-rotate', -30)
  ctx.font = `${fontSize}px ${fontFamily}`
  ctx.fillStyle = getAttr(el, 'watermarker-text-color', 'rgba(180, 180, 180, 0.3)')
  ctx.textAlign = getAttr(el, 'watermarker-text-align', 'center')
  ctx.textBaseline = getAttr(el, 'watermarker-text-baseline', 'center')
  ctx.translate(can.width / 2, can.height / 2)
  ctx.rotate(rotate * Math.PI / 180)
  ctx.translate(-can.width / 2, - can.height / 2)
  ctx.fillText(str, can.width / 2, can.height / 2, can.width)
  el.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}

const watermarker = {
  bind(el, binding) {
    addWaterMarker(binding.value, el)
  },
  componentUpdate(el, binding) {
    addWaterMarker(binding.value, el)
  }
}

export default watermarker
