import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { useState } from "react";
import Todo from "../socialcard/Todo";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

const LineChart = () => {
  const [data, setData] = useState({
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
    datasets: [
      {
        data: [1.5, 2.2, 4.2, 7.2, 4.5, 7.5, 7, 8],
        borderColor: "blacks",
        tension: 0.1,
        snapGaps: false,
        fill: true,
        pointBackgroundColor: "white",
        background:
          "linear-gradient(178.05deg, rgba(231, 231, 231, 0.29) 23.68%, rgba(56, 59, 61, 0) 97.92%)",
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
      scales: {
        y: {
          min: 0,
          max: 10,
        },
      },
    },
  };
  return (
    <div>
      <div className="linechart">
        <div>
          <p>Avtivities</p>
          <div className="selectYear">
            <select>
              <option value="Year">Year</option>
              <option value="2021">2020</option>
              <option value="2022">2020</option>
              <option value="2023">2020</option>
            </select>
          </div>
        </div>
        <Line
          data={data}
          options={options}
          style={{ width: "100%", height: "320px", objectFit: "contain" }}
        >
          Hello
        </Line>
      </div>
      <Todo />
    </div>
  );
};

export default LineChart;
