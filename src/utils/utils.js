// 获取属性值
function getAttr(el, attrName, def = '') {
  return el.getAttribute(attrName) || def
}

// 下划线转换驼峰
function linetoHump(name) {
  return name.replace(/\_(\w)/g, function(all, letter){
      return letter.toUpperCase();
  });
}
// 驼峰转换下划线
function humptoLine(name) {
return name.replace(/([A-Z])/g,"-$1").toLowerCase();
}

export {
  getAttr,
  linetoHump,
  humptoLine
}
