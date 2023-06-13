function isPalindrome(input: string): boolean {
  const normalizedString = input.toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');
  console.log(normalizedString)
  console.log(reversedString)
  return normalizedString === reversedString;

}

console.log(isPalindrome('hello'))
console.log(isPalindrome('dad'))
