/*
 * 求一个点{ x, y }是否在{ aX, aY }, { bX, bY }确定的线上
 */
function pointOnLine(x, y, aX, aY, bX, bY) {
  return ((aX - x) * (bY - y) - (bX - x) * (aY - y)) == 0
}

module.exports = pointOnLine