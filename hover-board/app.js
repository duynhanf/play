var container = document.querySelector('.container');



for (let index = 0; index < 200; index++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);

    square.addEventListener('mouseenter', () => {
        square.style.background = randomColor();
    })

    square.addEventListener('mouseleave', () => {
        square.style.background = '#1d1d1d';
    })
}

const randomColor = () => {
    const HEXAs = "1234567890ABCDEF";
    let color = '#';

    for (let index = 0; index < 6; index++) {
        color += HEXAs[Math.floor(Math.random() * HEXAs.length)];
    }

    return color;
}