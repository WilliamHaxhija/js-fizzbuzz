//Stampare numeri da 1 a 100
  //Creo ciclo
   //Multipli di 3 scitta Fizz invece di numero
    //Creo variabile con stringa 'Fizz' da inserire al posto di numero
    //Numero è multiplo di 3 se dividendolo per 3 da resto 0 ( numero % 3)
  //Multipli di 5 scitta Buzz invece di numero
    //Creo variabile con stringa 'BUzz' da inserire al posto di numero
    //Numero è multiplo di 5 se dividendolo per 5 da resto 0 ( numero % 5)
  //Multipli sia di 3 che di 5 scritta FizzBuzz invece di numero
    //Creo variabile con stringa 'FizzBuzz' da inserire al posto di numero
    //Numero è multiplo di 3 e di 5 se dividendolo per 3 e/o per 5 da resto 0 ( numero % 3/numero % 5)
//Pongo le condizioni logiche
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
  }
 
