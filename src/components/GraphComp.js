// GraphComp.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const GraphComp = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Sample data
    const data = {
      labels: [
        "Custom",
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
      ],
      datasets: [
        {
          label: "My Bar Chart",
          data: [1000, 250, 300, 1500, 900],
          maxBarThickness: 30,
          borderRadius: 4,
        },
      ],
    };

    // Create the chart with options to hide the axis labels and draw lines for axes
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          x: {
            display: true, // Hide x-axis labels
            grid: {
              display: false, // Hide x-axis grid lines
            },
          },
          y: {
            display: false, // Hide y-axis labels
            grid: {
              drawBorder: false, // Hide y-axis grid lines
            },
          },
        },
      },
    });

    // Cleanup function
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <>
      <div
        style={{
          borderLeft: "2px solid red",
          borderBottom: "2px solid red",
          height: "300px",
          width: "600px",
          position: "absolute",
        //   marginTop: "-22px",
        }}
      ></div>
      <canvas ref={chartRef} />
    </>
  );
};

export default GraphComp;
