const container = document.querySelector('.container');
for (let i = 1; i <= 100; i++) {
    let fizzOrBuzz;
    if (i % 3 === 0 && i % 5 === 0) {
        fizzOrBuzz = 'FizzBuzz';
    } else if (i % 3 === 0) {
        fizzOrBuzz = 'Fizz';
    } else if (i % 5 === 0) {
        fizzOrBuzz = 'Buzz';
    } else {
        fizzOrBuzz = i;
    }
    const box = document.createElement('div');
    box.innerHTML = fizzOrBuzz;
    container.append(box);
}

 
