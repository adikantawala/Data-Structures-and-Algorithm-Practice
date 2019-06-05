//https://leetcode.com/problems/find-duplicate-file-in-system/

/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    let dict = {};
    for(let group of paths){
        group = group.split(" ")
        let base = group.shift();
        for(let file of group){
            file = file.split("(");
            let content = file[1].slice(0,file[1].length-1)
            if(!dict[content]) dict[content] = []
            dict[content].push(base+ "/"+ file[0])
        }
    }
    let res = []
    for(let key in dict){
        if(dict[key].length != 1)res.push(dict[key])
    }
    return res
};
