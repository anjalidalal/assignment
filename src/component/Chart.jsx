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
} from "chart.js";
import { useState } from "react";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const Chart = () => {
  const [data, setData] = useState({
    labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
    datasets: [
      {
        label: "Activities",
        data: [1.5, 2.2, 4.2, 7.2, 4.5, 7.5, 7, 8],
        backgroundColor: "white",
        borderColor: "blacks",
        tension: 0.1,
        snapGaps: false,
      },
    ],
  });

  const options = {
    pligins: {
      legend: true,
    },
    scales: {
      y: {
        min: 0,
        max: 10,
      },
    },
  };
  return (
    <div>
      <Line
        data={data}
        options={options}
        style={{ width: "200px", height: "298px" }}
      >
        Hello
      </Line>
    </div>
  );
};

export default Chart;
