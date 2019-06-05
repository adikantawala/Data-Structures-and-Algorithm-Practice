// https://leetcode.com/problems/insert-delete-getrandom-o1/
// solution based of https://leetcode.com/problems/insert-delete-getrandom-o1/discuss/230425/JavaScript-solution-with-comments-Performance-beat-100-using-array-and-Map


/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {

    this.array = [];
    this.hash = {}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {

    if (this.hash[val] != undefined) return false

    this.array.push(val);
    this.hash[val] = this.array.length - 1
    return true;

};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {


    if(this.hash[val] == undefined) return false

    let idx = this.hash[val];
    this.array[idx] = this.array[this.array.length - 1]
    this.hash[this.array[this.array.length - 1] ] = idx;
    this.array.pop()
    delete this.hash[val]
    return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let n = Math.floor((this.array.length ) * Math.random())
    return this.array[n]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
