function draw() {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    const img = document.getElementById("tower");
    ctx.drawImage(img, 0, 0);
}