function draw() {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");

    // set canvas width and height to size of the tower image
    ctx.canvas.width = 1778;
    ctx.canvas.height = 1778;

    const img = document.getElementById("tower");
    ctx.drawImage(img, 0, 0);
}