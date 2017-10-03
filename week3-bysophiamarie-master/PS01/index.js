var svg = d3.select('svg');

/* Your code goes here */
var myArray = [];

for (i=0; i < 100; i++) {
    var object = { cx: 500 * Math.random(), cy: 500 * Math.random(), radius: (i * 0.2) + 5};
    myArray.push(object);
}

console.log(myArray);

svg.selectAll("rect")
    .data (myArray)
    .enter()
    .append("rect")
    .attr("x", function(d){return d.cx})
    .attr("y", function(d){return d.cy})
    .attr("height", function(d){return d.radius})
    .attr("width", function(d){return d.radius})
    .attr("fill", "green")
    .attr("stroke", "purple")
    .attr("stroke-width", 8)
    .attr("opacity", 0.075);

svg.style("background-color", "ivory")