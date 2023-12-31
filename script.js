function draw() {
    const width = 500;
    const height = 500;

    const rectWidth = 186;
    const rectHeight = 45;
    const rectX = 157;
    const rectY = 103;

    const circleR = 20;
    
    const svg = d3.select('#container')
        .append('svg')
        .attr('viewBox', `0 0 ${width} ${height}`);

    svg.append("svg:image")
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', width)
        .attr('height', height)
        .attr("xlink:href", "bttower.png")
        .append("svg:image");
    
    svg.append("rect")
        .attr('x', rectX)
        .attr('y', rectY)
        .attr("width", rectWidth)
        .attr("height", rectHeight)
        .attr("fill", "purple")
    
    const logo = svg.append("g");
    
    const circle = logo
        .append('circle')
        .attr('cx', rectX + (rectWidth / 2))
        .attr('cy', rectY + (rectHeight / 2) - 1)
        .attr('r', circleR)
        .style('fill', "none")
        .style("stroke", "white")
        .style("stroke-width", 2);
    
    logo.append("text")
        .text("BT")
        .attr("x", rectX + (rectWidth / 2))
        .attr("y", rectY + (rectHeight / 2) + 6)
        .attr("color", "black")
        .attr("text-anchor", "middle")
        .style("fill", "white")
    
    const timeInterval = 30;
    let i = rectWidth;
    setInterval(function(){
        if (i > -rectWidth) {
            i -= 3;
        } else {
            i = rectWidth;
        }
        updateLogo(i)
    }, timeInterval);
    
    let num;
    updateLogo = (num) => {
        svg.select("g").attr("transform", "translate("+num+", 1)")
    }
}