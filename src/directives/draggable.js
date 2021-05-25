const draggable = {
  inserted(el) {
    el.style.cursor = 'move'
    el.style.position = 'absolute'
    el.style.userSelect = 'none'
    el.onmousedown = e => {
      let disx = el.clientX - el.offsetLeft
      let disy = el.clientY - el.offsetTop
      document.onmousemove = e => {
        let x = el.clientX - disx
        let y = el.clientY - disy
        let maxX = document.body.clientWidth - parseInt(e.clientWidth)
        let maxY = document.body.clientHeight - parseInt(e.clientHeight)
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
