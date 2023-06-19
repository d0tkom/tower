function draw() {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    const img = document.getElementById("tower");
    ctx.drawImage(img, 0, 0);
}

function drawLogoD3() {
    const width = 400;
    const height = 170;
    
    const svg = d3.select('#container')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    svg.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "purple")
    
    const logo = svg.append("g");
    
    const circle = logo
        .append('circle')
        .attr('cx', width / 2)
        .attr('cy', height / 2)
        .attr('r', 30)
        .style('fill', "none")
        .style("stroke", "white")
        .style("stroke-width", 4);
    
    logo.append("text")
        .text("BT")
        .attr("x", width / 2)
        .attr("y", height / 2 + 10)
        .attr("color", "black")
        .attr("text-anchor", "middle")
        .style("fill", "white")
    
    const timeInterval = 50;
    let i = width;
    setInterval(function(){
        if (i > -width) {
            i -= 10;
        } else {
            i = width;
        }
        updateLogo(i)
    }, timeInterval);
    
    let num;
    updateLogo = (num) => {
        svg.select("g").attr("transform", "translate("+num+", 1)")
    }
}