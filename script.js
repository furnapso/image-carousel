let currentPosition = 0;

function slide(e) {
    let direction;

    const images = document.querySelector('.images');


    if (e.target.classList.contains('left')) {
        direction = 'left'
    }
    else {
        direction = 'right'
    }

    switch (direction) {
        case 'right':
            if (currentPosition <= -900) {
                currentPosition = 0;
            }
        
            else {
                currentPosition = currentPosition - 300;
            }
        break

        case 'left':
            if (currentPosition == 0) {
                currentPosition = -900;
            }

            else {
                currentPosition = currentPosition + 300;
            }
        break
    }

    images.style.transform = `translateX(${currentPosition}px)`
}

document.querySelectorAll('.arrow').forEach(arrow => arrow.addEventListener('click', slide))