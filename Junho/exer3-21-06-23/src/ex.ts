const main = () => {
    const isPrime = (number) => {
      if (number < 2) {
        return false;
      }
  
      let divisor = 2;
      while (divisor * divisor <= number) {
        if (number % divisor === 0) {
          return false;
        }
        divisor++;
      }
  
      return true;
    };
  
    const primes = [];
  
    for (let i = 1; i <= 1000; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    const sum = primes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    console.log("Sum of prime numbers between 1 and 1000:", sum);
  
    return sum;
  };
  
  main();
  