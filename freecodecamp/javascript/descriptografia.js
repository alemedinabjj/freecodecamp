function rot13(str) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for (var i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) < 0) {
      result += str[i];
    } else {
      result += alphabet[(alphabet.indexOf(str[i]) + 13) % 26];
    }
  }
  return result;
}

console.log(rot13("SERR PBQR PNZC"));