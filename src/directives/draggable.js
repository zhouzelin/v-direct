const draggable = {
  inserted(el, binding) {
    el.style.cursor = 'move'
    el.style.position = binding.arg || 'absolute'
    el.style.userSelect = 'none'
    // pc端
    el.onmousedown = e => {
      let disx = e.clientX - el.offsetLeft
      let disy = e.clientY - el.offsetTop
      document.onmousemove = e => {
        let x = e.clientX - disx
        let y = e.clientY - disy
        let maxX = el.parentNode.clientWidth - parseInt(el.clientWidth)
        let maxY = el.parentNode.clientHeight - parseInt(el.clientHeight)
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
    // 移动端
    el.ontouchstart = e => {
      e = e.targetTouches[0]
      let disx = e.clientX - el.offsetLeft
      let disy = e.clientY - el.offsetTop
      document.ontouchmove = e => {
        e.preventDefault()
        e = e.targetTouches[0]
        let x = e.clientX - disx
        let y = e.clientY - disy
        let maxX = el.parentNode.clientWidth - parseInt(el.clientWidth)
        let maxY = el.parentNode.clientHeight - parseInt(el.clientHeight)
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
      document.ontouchend = e => {
        document.ontouchmove = document.ontouchend = null
      }
    }
  }
}

export default draggable
