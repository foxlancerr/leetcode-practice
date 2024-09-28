function expandAround(str: string, left: number, right: number) {
  while (left >= 0 && str[left] == str[right] && str.length > right) {
    left--;
    right++;
  }

  return right - left - 1;
}
function longestPalindrome(s: string): string {
  if (s.length == 0) return "";
  let maxLength = 1;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const leng1 = expandAround(s,i,i)
    const leng2 = expandAround(s,i,i+1)

    const leng = Math.max(leng1, leng2)
    if(leng > maxLength) {
        maxLength = leng
        start = i - Math.floor((maxLength - 1 )/ 2)
    }
  }

  return s.substring(start, maxLength + start)
}

const input = "babad";
const result = longestPalindrome(input);
console.log(result); // Output: "bab" or "aba"
