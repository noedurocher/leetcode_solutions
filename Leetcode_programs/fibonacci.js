/**
 * @param {Nber} N
 * @return {Nber}
 */
var fib = function(N) {
    let arr=[];
    let i=0;

    arr[i] = 0;
    arr[i+1] = 1;

    if(N<1){
        return arr[i];
    }else{
        arr.length = N+1;
        for (i=2; i<arr.length; i++){
            arr[i] = arr[i-1] + arr[i-2];
        }
    }
    
    return arr[arr.length-1];
};

console.log(fib(7));