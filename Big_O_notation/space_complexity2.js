function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

subtotals([1,2,3,4,5,7,8,9,5,2])

//space complexity of o(n)
//we are creating a new array with n length which depends on the length of the input array