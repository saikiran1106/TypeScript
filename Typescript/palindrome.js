function isPalindrome(input) {
    var normalizedString = input.toLowerCase();
    var reversedString = normalizedString.split('').reverse().join('');
    console.log(normalizedString);
    console.log(reversedString);
    return normalizedString === reversedString;
}


console.log(isPalindrome('hello'));
console.log(isPalindrome('dad'));
