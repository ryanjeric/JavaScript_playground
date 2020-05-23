window.addEventListener('load', () => {
    console.log('HELLO')
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // RESIZING
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeRect(100, 50, 200, 500);

    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.stroke();


})