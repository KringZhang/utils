/**
 * @description: 格式化金额，默认保留2位小数，解析失败默认展示/
 * @param {Number | String} amount
 * @param {Number} decimalNum 保留几位小数
 * @param {String} defaultReturnedVal 解析失败时默认展示
 * @returns {String}
 */
 export const formatAmount = (amount, decimalNum = 2, defaultReturnedVal = '/') => {
  if (typeof amount === 'number') return amount.toFixed(decimalNum)
  if (typeof amount === 'string') {
    if (amount === '' || isNaN(Number(amount))) {
      return defaultReturnedVal
    } else {
      return Number(amount).toFixed(decimalNum)
    }
  }
  return defaultReturnedVal
}