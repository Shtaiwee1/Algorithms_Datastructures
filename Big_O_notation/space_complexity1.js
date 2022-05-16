function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}
onlyElementsAtEvenIndex([1,2,3,4,5,6,7,8,9,8,5,2,6])

//space complexity is o(n)