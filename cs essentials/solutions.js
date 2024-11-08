//Fibonacci  series using interatice approach
    //requried length = len of the array
function Fibonacci_inter(target){
    const arr = [0,1];
    for(let i=2;i<target;i++){
        arr.push(arr[i-1]+arr[i-2]);
    };
    return arr;
};

//Fibonacci with recursive
//carry array till the end of recursive, push new element each call
//break if arr length == target and return arr
function Fibonacci_recur(arry, target){
     if (arry.length == target){
        return arry;}

    else{
        arry.push(arry[arry.length-1]+arry[arry.length-2]);
        return Fibonacci_recur(arry,target);
    };}
console.log(Fibonacci_recur([0,1],8));