const container = document.querySelector('.container');
for (let i = 1; i <= 100; i++) {
    let fizzOrBuzz;
    let backGround;
    if (i % 3 === 0 && i % 5 === 0) {
        fizzOrBuzz = 'FizzBuzz';
        backGround = 'fizz-buzz';
    } else if (i % 3 === 0) {
        fizzOrBuzz = 'Fizz';
        backGround = 'fizz';
    } else if (i % 5 === 0) {
        fizzOrBuzz = 'Buzz';
        backGround = 'buzz';
    } else {
        fizzOrBuzz = i;
    }
    const box = document.createElement('div');
    box.innerHTML = fizzOrBuzz;
    box.classList.add('card');
    box.classList.add(backGround);
    container.append(box);
}

 
