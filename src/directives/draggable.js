const draggable = {
  inserted(el, binding) {
    el.style.cursor = 'move'
    el.style.position = binding.arg || 'absolute'
    el.style.userSelect = 'none'
    el.onmousedown = e => {
      let disx = e.clientX - el.offsetLeft
      let disy = e.clientY - el.offsetTop
      document.onmousemove = e => {
        let x = e.clientX - disx
        let y = e.clientY - disy
        let maxX = document.body.clientWidth - parseInt(el.clientWidth)
        let maxY = document.body.clientHeight - parseInt(el.clientHeight)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }
        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }
        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = e => {
        document.onmousemove = document.onmouseup = null
      }
    }
  }
}

export default draggable
