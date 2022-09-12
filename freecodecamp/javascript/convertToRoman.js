const convertToRoman = num => {
  let roman = ''
  let romanNumList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let a
  if (num < 1 || num > 3999) return 'Digite um número entre 1 e 3999'
  else {
    ;[...Object.keys(romanNumList)].forEach(key => {
      a = Math.floor(num / romanNumList[key])
      if (a >= 0) {
        for (let i = 0; i < a; i++) {
          roman += key
        }
      }
      num = num % romanNumList[key]
    })
  }
  return roman
}
