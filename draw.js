let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'red';
context.fillRect(0, 0, 750, 300);

context.beginPath();
context.rect(100, 100, 400, 400);
context.fillStyle = 'red';
context.lineWidth = 4;
context.stroke();

context.beginPath();
context.rect(10, 10, 200, 200);
context.fillStyle = 'blue';
context.lineWidth = 4;
context.fill();

context.beginPath();
context.arc(300, 300, 100, 0, 3);
context.fill();
