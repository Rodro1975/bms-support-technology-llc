"use client";

import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const Indicators = () => {
  // Datos de ejemplo para las gráficas
  const barData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Client Satisfaction (%)",
        data: [90, 92, 95, 93],
        backgroundColor: "#0070f3",
      },
    ],
  };

  const pieData = {
    labels: ["On Time", "Delayed"],
    datasets: [
      {
        data: [90, 10],
        backgroundColor: ["#4CAF50", "#FF5722"],
      },
    ],
  };

  return (
    <section className="bg-black p-8 text-center">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-primary">Indicators of Success</h2>
        <p className="text-foreground mb-12 max-w-2xl mx-auto">
          At BMS, we measure our success through various key performance indicators (KPIs) that reflect
          our commitment to excellence and client satisfaction. Here are some of the metrics we track:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gráfica de Barras */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Client Satisfaction</h3>
          <Bar data={barData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>

        {/* Gráfica de Pastel */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Project Delivery</h3>
          <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: true }} />
        </div>
      </div>
    </section>
  );
};

export default Indicators;
