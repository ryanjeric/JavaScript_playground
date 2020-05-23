// Dev Ed - https://www.youtube.com/watch?v=3GqUM4mEYKA
window.addEventListener('load', () => {
    console.log('HELLO')
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    // RESIZING
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // variables
    let painting = false;
    let color = "#000000";
    let linesize = 10

    function startPosition(e) {
        painting = true;
        draw(e)
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = linesize;
        ctx.lineCap = "round";
        ctx.strokeStyle = color;

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    // eventlisteners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

    const colorInput = document.querySelector("#colorInput");
    colorInput.addEventListener("change", (e) => {
        color = e.target.value;
    })
    const paintSize = document.querySelector("#paintSize");
    paintSize.addEventListener("change", (e) => {
        linesize = e.target.value;
    })
    const clearbtn = document.querySelector("#clearCanvas");
    clearbtn.addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })
})