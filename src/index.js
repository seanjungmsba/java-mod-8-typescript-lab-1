function prepend(numSpaces, inputString) {
    // your code here
    var spaces = "";
    for (var i = 0; i < numSpaces; i++) {
        spaces += " ";
    }
    return spaces + inputString;
}
console.log(prepend(10, "Hello World"));
