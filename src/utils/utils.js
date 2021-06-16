// 获取属性值
const getAttr = (el, attrName, def = '') => {
  return el.getAttribute(attrName) || def
}

export {
  getAttr
}
