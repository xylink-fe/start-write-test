/**
 * copy the values of all enumerable own properties from
 * one or more source objects to a target object.
 * @param {Object} target
 * @param {Object} soucres, can be multiple
 * @returns {Object}
 */
function assign(target, soucres) {
  if (Object.prototype.toString.call(target) !== "[object Object]") {
    return "Not a object";
  }

  return Object.assign({}, target, soucres);
}

module.exports = assign;
