function numPrimo(numero) {
    for (let i = 2; i <= numero / 2; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  for (let numero = 2; numero <= 100; numero++) {
    if (numPrimo(numero)) {
      console.log(numero);
    }
  }
  