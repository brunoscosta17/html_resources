let buttons = document.querySelectorAll('.button');
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', (e) => {
        e.preventDefault();
        let span = document.createElement('span');
        span.classList.add('overlay');
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        span.style.left = x + 'px';
        span.style.top = y + 'px';
        e.target.appendChild(span);
        setTimeout(() => {
            span.remove();
        }, 500);
    });
    
}