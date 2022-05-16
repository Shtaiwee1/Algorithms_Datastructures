// Recursive Version
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}

//print 3
//countDown(2)
//print 2
//countDown(1)
//print 1
//countDown(0)
//print "all done!"




//Javascript uses the call stack to manage function invocations
//the base case in recursion is when the recursion hits an endpoint or the recursion ends