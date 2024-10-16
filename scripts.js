const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

let size = 30;
let x = 50;
let y = 50;


canvas.addEventListener('mousedown', () => {

});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.stroke();
}



function draw () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle(x, y);
    requestAnimationFrame(draw);
}

draw();