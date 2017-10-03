var svg = d3.select('svg');

/* Your code goes here */

d3.csv("data.csv", function(babe) {


    svg.selectAll("rect")
        .data(babe)
        .enter()
        .append("rect")
        .attr("x", function (d) {
            return d.x
        })
        .attr("y", function (d) {
            return d.y
        })
        .attr("height", function (d) {
            return d.r
        })
        .attr("width", function (d) {
            return d.r})
        .attr("fill", function(d){
            return d.fill})
        .attr("stroke", "black")
        .attr("stroke-width", 3)

});
var myArray = [];

for (i=0; i < 100; i++) {
    var object = { cx: 500 * Math.random(), cy: 500 * Math.random(), radius: (i * 0.2) + 5};
    myArray.push(object);
}

console.log(myArray);
svg.selectAll("circle")
    .data (myArray)
    .enter()
    .append("circle")
    .attr("cx", function(d){return d.cx})
    .attr("cy", function(d){return d.cy})
    .attr("r", function(d){return d.radius})
    .attr("fill", "yellow")
    .attr("stroke", "magenta")
    .attr("stroke-width", 5)
    .attr("opacity", 0.25);