'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length];
  delete this.data[this.length];
  this.length--;
  return returnValue;
};

/**
 * // Execute a provided function once for each array element
 * @returns {*}
 */

// List.prototype.forEach = function(functionCallback, value, idx) {
//   for(idx = 0; idx < List.length; idx++) {
//     functionCallback(value, idx);
//   }
  // let returnValue = List.data[idx];
  // return returnValue;
// };

List.prototype.for = function(value) {
  for (let i = 0; i < List.length; i++) {
    console.log(List.data[i]);
  }
};

module.exports = List;
