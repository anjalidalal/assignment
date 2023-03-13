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
        backgroundColor: "black",
        borderColor: "white",
        tension: 0.1,
        snapGaps: false,
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
        text: "Chart.js Line Chart",
      },
    },
  };
  return (
    <div>
      <div className="barchart">
        <Bar data={data} options={options} className="barChart">
          Hello
        </Bar>
        <h1>Orders</h1>
        <p>
          {" "}
          <span>(+23)</span> in last week
        </p>
      </div>
      <Team />
    </div>
  );
};

export default BarChart;
