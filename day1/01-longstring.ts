// Longest Substring Without Repeating Characters

function longestSubstring(str:string){
    let maxLength = 0
    // for loop
    // object mai store kardainghi
    // condition check karian ghi
    let charObj = {}
    let left = 0
    for(let right = 0; right< str.length; right++){
        const currentChar = str[right]
        console.log(currentChar,charObj[currentChar])
        if(charObj[currentChar] !== undefined && charObj[currentChar] >= left){
            left = charObj[currentChar] + 1
        }

        charObj[currentChar] = right

        maxLength = Math.max(maxLength,right - left + 1)
        console.log("maxlength >>>>>>>>",maxLength)
    }
    return maxLength;

}
console.log(longestSubstring('abcabccc'))
console.log(longestSubstring('bcabcaca'))