function add(n){
    return n*(n+1)/2;
}

var t1 = performance.now();
add(10000000000)
var t2 = performance.now();
console.log(`time Elapsed: ${(t2 - t1)/1000} seconds`)

//use the performance tracker to see visual representation between different runtimes and inputs for every code block
//the widget can also be used to compare different time complexities for a nexus of code snippets
//The graph represents a relation between runtime and the size of inputs
// relationships are from faster to slower:
//o(1),o(logn),o(n),o(nlogn),o(n^2)..etc