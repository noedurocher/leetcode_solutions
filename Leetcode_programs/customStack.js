/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize = maxSize;
    this.arr = [];
    this.count = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.count<this.maxSize){
        this.arr.push(x)
        this.count++;
    }
    
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.arr.length>0){
        this.count--;
        return this.arr.pop();
    }else{
        return -1
    }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    if(this.arr.length < k){
        for(let i=0; i<this.arr.length; i++){
            this.arr[i] += val
        }
    }else{
        for(let i=0; i<k; i++){
            this.arr[i] += val
        }
    }
    
};

let customStack = new CustomStack(3); 
customStack.push(1); 
customStack.push(2);
console.log(customStack.pop()); 
customStack.push(2);                          // stack becomes [1, 2]
customStack.push(3);                          // stack becomes [1, 2, 3]
customStack.push(4); 
customStack.increment(5, 100);
customStack.increment(2, 100); 
console.log(customStack.arr);
console.log(customStack.pop());
console.log(customStack.pop());
console.log(customStack.pop());
console.log(customStack.pop());
/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */