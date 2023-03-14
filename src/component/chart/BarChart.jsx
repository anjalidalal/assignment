import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useState } from "react";
import Team from "../socialcard/Team";

ChartJS.register(
  Title,
  Tooltip,
  BarElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const BarChart = () => {
  const [data, setData] = useState({
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Activities",
        data: [310, 200, 250, 500, 400, 450, 300],
        backgroundColor: "#FFFFFF",
        tension: 0.1,
        snapGaps: false,
        barThickness: 5,
        borderRadius: 30,
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },

      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
          },
        ],
      },
    },
  };
  return (
    <div>
      <div className="barchart">
        <Bar data={data} options={options}>
          Hello
        </Bar>
        <h1>Orders</h1>
        <p>
          {" "}
          <span>(+23)</span> in last week
        </p>
      </div>
    </div>
  );
};

export default BarChart;
