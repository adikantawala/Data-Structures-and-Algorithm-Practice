// https://leetcode.com/problems/powx-n/

var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (x === 0) return 0;

    if(n>0){
        if(n%2 === 0){
            let half = myPow(x, n/2);
            return half * half;
        } else{
            return x *myPow(x,n-1)
        }
    } else{
        return myPow(1/x, -n)
    }

};
