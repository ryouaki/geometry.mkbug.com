/*
 * 求一个点{ x, y }到两个点{ aX, aY }, { bX, bY }确定的线之间的距离
 */
function pointToLine(x, y, aX, aY, bX, bY) {
  let len = 0
  if (aX - bX == 0) {
    len = x - aX
  } else {
    let A = (aY - bY) / (aX - bX)
    let B = bY - A * bX

    len = (A * x + B - y) / Math.sqrt(Math.pow(A, 2) + 1)
  }
  return len
}
module.exports = pointToLine