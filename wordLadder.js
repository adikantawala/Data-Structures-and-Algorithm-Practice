//https://leetcode.com/problems/word-ladder/

//my solution based of leetcode python solution

//O(n) time is length of word * length of input word list
//Space Complexity: O(M×N), to store all M transformations for each of the N words
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(start, end, list) {
    list = new Set(list);
    let L = start.length;
    let allCombos = {};
    list.forEach((word)=> {
        for(let i = 0;i<L;i++){
            let temp = word.slice(0,i) + "*" + word.slice(i+1);
            if(!allCombos[temp]) allCombos[temp] = []
            allCombos[temp].push(word)
        }
    })

    let q = [[start,1]];
    let visited = new Set();
    visited.add(start);
    while(q.length){
        let node = q.shift();
        let curr = node[0];
        let level = node[1];
        for(let i = 0; i < L;i++){
            let iword = curr.slice(0,i) + "*" + curr.slice(i+1);
            if(allCombos[iword]){
                for(let j=0;j<allCombos[iword].length;j++){
                    let word = allCombos[iword][j];
                    if(word === end) return level + 1
                    if(!visited.has(word)){
                        visited.add(word);
                        q.push([word,level+1])
                    }
                }
            }
        }
    }
    return 0;
};

//another way to do it
function ladderLength(beginWord, endWord, wordList) {
  let len = 1;
  let queue = [beginWord];
  const dict = new Set(wordList);
  const seen = new Set(queue);
  
  while (queue.length) {
      let next = [];
      for(let v of queue){
          if(v === endWord) return len

          const arr = v.split('');
          for (let i = 0; i < arr.length; i++) {
              for (let d = 0; d < 26; d++) {
                  arr[i] = String.fromCharCode(97+d);
                  const nv = arr.join('');
                  if (!seen.has(nv) && dict.has(nv)) {
                      next.push(nv);
                      seen.add(nv);
                  }
                  arr[i] = v[i];
              }
          }
      }
      queue = next;
      len +=1
  }

  return 0;
}
