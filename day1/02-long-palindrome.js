function expandAround(str, left, right) {
    while (left >= 0 && str[left] == str[right] && str.length > right) {
        left--;
        right++;
    }
    return right - left - 1;
}
function longestPalindrome(s) {
    if (s.length == 0)
        return "";
    var maxLength = 1;
    var start = 0;
    for (var i = 0; i < s.length; i++) {
        var leng1 = expandAround(s, i, i);
        var leng2 = expandAround(s, i, i + 1);
        var leng = Math.max(leng1, leng2);
        if (leng > maxLength) {
            maxLength = leng;
            start = i - Math.floor((maxLength - 1) / 2);
        }
    }
    return s.substring(start, maxLength + start);
}
var input = "babad";
var result = longestPalindrome(input);
console.log(result); // Output: "bab" or "aba"
