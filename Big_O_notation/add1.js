function add(n){
    let total=0;
    for(let i=0; i<=n;i++){
        total+=i
    }
    return total;
}

var t1 = performance.now();
add(10000000000)
var t2 = performance.now();
console.log(`time Elapsed: ${(t2 - t1)/1000} seconds`)