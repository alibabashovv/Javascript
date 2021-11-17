function ReverseString(str) {
    var reversestr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversestr += str[i];
    }
    return reversestr;
}
console.log(ReverseString("Hello my dear brother "));