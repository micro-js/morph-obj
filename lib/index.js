/**
 * Expose morphObj
 */

module.exports = morphObj

/**
 * morphObj
 */

function morphObj (oldObj, newObj) {
  for (var key in oldObj) {
    delete oldObj[key]
  }

  for (var key in newObj) {
    oldObj[key] = newObj[key]
  }

  return oldObj
}
