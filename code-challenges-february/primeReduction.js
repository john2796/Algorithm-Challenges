function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function primeReduction(a, b) {
  const arr = [];
  function reduction(n) {
    if (arr.includes(n)) {
      arr.length = 0;
      return false;
    }
    arr.push(n);
    if (n === 1) {
      arr.length = 0;
      return true;
    }
    let hold = 0;
    let num = n;
    while (num > 0) {
      hold += Math.pow(num % 10, 2);
      num -= num % 10;
      num /= 10;
    }
    return reduction(hold);
  }
  let count = 0;
  for (let i = a; i < b; i++) {
    if (isPrime(i)) {
      if (reduction(i)) {
        count++;
      }
    }
    // arr = [];
  }
  return count;
}


// Basic Test cases
console.log(primeReduction(2, 7)); // <--- 0
console.log(primeReduction(2, 8)); // <--- 1, of the prime numbers in the range 2, 3, 4, 5, 6, 7, only 7 reduces to one.
console.log(primeReduction(1, 25)); // <--- 4
console.log(primeReduction(100, 2000)); // <--- 47


