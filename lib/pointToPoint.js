/*
 * 求两个点{ aX, aY }, { bX, bY }之间的距离
 */
function pointToPoint(aX, aY, bX, bY) {
  return Math.sqrt((aX - bX) * (aX - bX) + (aY - bY) * (aY - bY) )
}
module.exports = pointToPoint