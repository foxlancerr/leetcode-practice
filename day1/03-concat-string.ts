
function mergeAlternately(word1, word2) {
    const length1 = word1.length
    const length2 = word2.length

    let result = ""
    const maxLength = Math.min(length1, length2)
    for(let i=0; i< maxLength;i++){
        result= result + word1[i] + word2[i]
    }

    if (length1 > length2) {
        result += word1.slice(maxLength); // Append the remaining part of word1
    } else if (length2 > length1) {
        result += word2.slice(maxLength); // Append the remaining part of word2
    }

    return result
};

const resultshow = mergeAlternately('asd','jkl')
console.log("result >>>>>>>>>>>>>>>>>>>",resultshow)