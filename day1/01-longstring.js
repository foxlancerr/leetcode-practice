// Longest Substring Without Repeating Characters
function longestSubstring(str) {
    var maxLength = 0;
    // for loop
    // object mai store kardainghi
    // condition check karian ghi
    var charObj = {};
    var left = 0;
    for (var i = 0; i < str.length; i++) {
        var currentChar = str[i];
        console.log(currentChar, charObj[currentChar]);
        if (charObj[currentChar] !== undefined && charObj[currentChar] >= left) {
            left = charObj[currentChar] + 1;
        }
        charObj[currentChar] = i;
        maxLength = Math.max(maxLength, i - left + 1);
        console.log("maxlength >>>>>>>>", maxLength);
    }
    return maxLength;
}
console.log(longestSubstring('abcabccc'));
console.log(longestSubstring('bcabcaca'));
