// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
  if(array[idx] === undefined) return  true;
  let lidx = idx * 2
  let ridx = idx * 2 + 1
  let lval = array[lidx] === undefined ? -Infinity : array[lidx]
  let rval = array[ridx]=== undefined ? -Infinity : array[ridx]

  return array[idx] > lval && array[idx]> rval && isMaxHeap(array, lidx) && isMaxHeap(array, ridx)
}


module.exports = {
    isMaxHeap
};
