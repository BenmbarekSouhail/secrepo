function isPalindrome(word) {
    
    word = word.replace(/\s/g, '').toLowerCase();
    return word === word.split('').reverse().join('');
}

let word = prompt("Enter a word: ");
if (isPalindrome(word)) {
    console.log(`${word} is a palindrome.`);
} else {
    console.log(`${word} is not a palindrome.`);
}