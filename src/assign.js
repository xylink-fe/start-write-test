/**
 * copy the values of all enumerable own properties from
 * one or more source objects to a target object.
 * @param {Object} target
 * @param {Object} soucres, can be multiple
 * @returns {Object}
 */
function assign(target, soucres) {
  // add your code here
  if (Object.prototype.toString.call(soucres) != '[object Object]' || Object.keys(soucres).length == 0) {
    // throw 'Soucres not na Object or An empty object'
    return 'Soucres not na Object or An empty object'
  } 
  return  Object.assign(target, soucres)
}

module.exports = assign;
