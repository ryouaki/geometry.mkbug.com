/*
 * 求一个点{ x, y }到两个点{ aX, aY }, { bX, bY }确定的线之间的距离
 */
function pointToLine(x, y, aX, aY, bX, bY) {
  return Math.sqrt((aX - bX) * (aX - bX) + (aY - bY) * (aY - bY) )
}
module.exports = pointToLine