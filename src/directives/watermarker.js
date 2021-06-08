import Databus from 'utils/databus.js'
const databus = new Databus()
// 给整个页面添加背景水印
function addWaterMarker(str, parentNode) {
  // 水印文字，父元素，字体，文字颜色
  var can = document.createElement('canvas')
  can.width = databus.watermarker.width
  can.height = databus.watermarker.height
  can.style.display = 'none'
  var ctx = can.getContext('2d')
  ctx.font = databus.watermarker.font
  ctx.fillStyle = databus.watermarker.textColor
  ctx.textAlign = databus.watermarker.textAlign
  ctx.textBaseline = databus.watermarker.textBaseline
  ctx.translate(can.width / 2, can.height / 2)
  ctx.rotate(databus.watermarker.rotate * Math.PI / 180)
  ctx.translate(-can.width / 2, - can.height / 2)
  ctx.fillText(str, can.width / 2, can.height / 2, can.width)
  parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}

const watermarker = {
  bind: function (el, binding) {
    addWaterMarker(binding.value, el)
  },
}

export default watermarker
