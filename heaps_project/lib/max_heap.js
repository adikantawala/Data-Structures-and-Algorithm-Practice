class MaxHeap {
  constructor(){
    this.array = [null]
  }
  getParent(idx){
    return Math.floor(idx/2)
  }

  getLeftChild(idx){
    return idx * 2
  }

  getRightChild(idx){
    return idx * 2 + 1
  }

  insert(val){
    this.array.push(val)
    let idx = this.array.length - 1
    this.siftUp(idx)
  }

  siftUp(idx){
    if(idx === 1) return

    let parentidx = this.getParent(idx)
    if(this.array[parentidx] < this.array[idx]){
      [this.array[parentidx], this.array[idx]] = [this.array[idx],this.array[parentidx] ]
      this.siftUp(parentidx)
    }
  }

  deleteMax(){
    let {array} = this
    if(array.length === 2) return array.pop()
    if(array.length === 1) return null

    let max = array[1]
    this.array[1] = this.array[this.array.length - 1]
    this.array.pop();

    this.siftDown(1)
    return max;
  }

  siftDown(idx){

    let ary = this.array;

    let lchildidx = this.getLeftChild(idx)
    let rchildidx = this.getRightChild(idx)
    let lval = ary[lchildidx]
    let rval = ary[rchildidx]

    if(lval === undefined) lval = -Infinity
    if(rval === undefined) rval = -Infinity

    if(ary[idx] > lval && ary[idx] > rval) return;
    let swapidx
    if (lval < rval){
      swapidx = rchildidx
    } else {
      swapidx = lchildidx
    }
    [ary[idx],ary[swapidx]] = [ary[swapidx],ary[idx]];
    this.siftDown(swapidx)
  }



}

module.exports = {
    MaxHeap
};
