const backgroundStyle = document.querySelector(".background-styled");
const body = document.querySelector('body');
let counter = 0;

body.addEventListener('mousemove', (e) => {
    const div = document.createElement('div');
    let x = e.pageX;
    let y = e.pageY;
    div.className = 'particles';
    div.style.left = x+'px';
    div.style.top = y+'px';
    div.style.width = counter/4+'px';
    div.style.height = counter/4+'px';
    backgroundStyle.appendChild(div);

    let rotate = Math.floor(Math.random() * 360);
    div.style.transform = `rotate(${rotate}deg)`

    setTimeout(() => {
        div.remove()
    }, 100)

    counter++;
    if(counter >= 50) {
        counter = 0;
        const boom = document.createElement('div');
        backgroundStyle.appendChild(boom);
        boom.className = "boom"
        boom.style.left = x+'px';
        boom.style.top = y+'px';
        setTimeout(() => {
            boom.remove()
        }, 500)
    }
})
