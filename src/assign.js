/**
 * copy the values of all enumerable own properties from
 * one or more source objects to a target object.
 * @param {Object} target
 * @param {Object} soucres, can be multiple
 * @returns {Object}
 */
function assign(target, soucres) {
  // add your code here
  if(Array.isArray(soucres)){
    soucres.forEach(function(item){
      target = Object.assign(target, item);
    });
    return target;
  }
  return Object.assign(target, soucres);
}

module.exports = assign;
