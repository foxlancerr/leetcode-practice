function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function gcdOfStrings(str1, str2) {
    // Check if gcd is possible by verifying if str1 + str2 == str2 + str1
    if (str1 + str2 !== str2 + str1) return "";

    // Find GCD of the lengths of the two strings
    const gcdLength = gcd(str1.length, str2.length);

    // Return the prefix of str1 with length equal to the GCD
    return str1.slice(0, gcdLength);
}

console.log(gcdOfStrings('ABABAB', 'AB')); // Output: "AB"
console.log(gcdOfStrings('ABCDEF', 'ABC')); // Output: ""
