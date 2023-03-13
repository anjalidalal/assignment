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
    pligins: {
      legend: true,
    },
  };
  return (
    <div>
      <Bar data={data} options={options} className="barChart">
        Hello
      </Bar>
    </div>
  );
};

export default BarChart;
