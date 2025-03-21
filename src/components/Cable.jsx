import { useEffect } from "react";
import * as d3 from "d3";

const Cable = () => {
  useEffect(() => {
    const width = 300;
    const height = 300;

    // Clear any existing SVG content
    d3.select("#cable-svg").selectAll("*").remove();
    
    const svg = d3
      .select("#cable-svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Outer black insulation
    svg
      .append("circle")
      .attr("r", 140)
      .attr("fill", "black");

    // Inner white insulation
    svg
      .append("circle")
      .attr("r", 120)
      .attr("fill", "white")
      .attr("stroke", "lightblue")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "5,5");

    // Define wire pair colors and positions
    const wirePairs = [
      // Center yellow pair
      { x: 0, y: 0, color: "yellow" },
      
      // Top blue pair
      { x: 0, y: -60, color: "blue" },
      
      // Bottom pairs (red and brown)
      { x: -40, y: 60, color: "red" },
      { x: 40, y: 60, color: "brown" },
      
      // Left pairs (brown)
      { x: -70, y: 0, color: "brown" },
      
      // Right pairs (green)
      { x: 70, y: 0, color: "green" },
      
      // Upper left and right (brown and green)
      { x: -40, y: -30, color: "brown" },
      { x: 40, y: -30, color: "green" },
    ];

    // Draw wire pairs
    wirePairs.forEach(({ x, y, color }) => {
      // Draw dashed circle outline around pair - MADE LARGER
      svg
        .append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", 35) // Increased from 25 to 35
        .attr("fill", "none")
        .attr("stroke", "lightblue")
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "5,5");

      // Draw the two wires in each pair - MADE LARGER AND SPACED FURTHER APART
      [-12, 12].forEach((offset) => { // Increased offset from 8 to 12
        const wireX = x;
        const wireY = y + offset;
        
        // Wire insulation - MADE LARGER
        svg
          .append("circle")
          .attr("cx", wireX)
          .attr("cy", wireY)
          .attr("r", 15) // Increased from 10 to 15
          .attr("fill", color)
          .attr("stroke", "black")
          .attr("stroke-width", 0.5);
        
        // Wire conductor pins (4 copper dots in each wire) - ADJUSTED POSITIONS
        const pinPositions = [
          { dx: -5, dy: -5 }, // Adjusted from -3 to -5
          { dx: 5, dy: -5 },  // Adjusted from 3 to 5
          { dx: -5, dy: 5 },  // Adjusted from -3 to 5
          { dx: 5, dy: 5 }    // Adjusted from 3 to 5
        ];
        
        pinPositions.forEach(({ dx, dy }) => {
          svg
            .append("circle")
            .attr("cx", wireX + dx)
            .attr("cy", wireY + dy)
            .attr("r", 3) // Slightly increased from 2 to 3
            .attr("fill", "#8B4513");  // Dark copper/brown color
        });
      });
    });
  }, []);

  return (
    <div className="flex justify-center">
        <svg id="cable-svg"></svg>
    </div>
 
  )
};

export default Cable;