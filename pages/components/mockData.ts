import { months } from "../helper/Util";

const labels = months({ count: 7 });

export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "Transcations",
      data: [65, 59, 80, 81, 56, 50, 49, 112, 79, 52, 43],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};

export const doughnutChartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Transcation dataset",
      data: [300, 50, 100],
      background: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
