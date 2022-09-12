const Palindrome = (str) => {
  let newStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let reverseStr = newStr.split('').reverse().join('');
  return newStr === reverseStr;
}
console.log(Palindrome("eye"));