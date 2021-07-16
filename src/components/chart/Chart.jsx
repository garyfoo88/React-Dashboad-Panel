import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { dummyData } from "../../utils/mockData";
function Chart() {
  return (
    <div className="chart">
      <h3 className="chart-title">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={dummyData}>
              <XAxis dataKey="name" stroke="#5550bd" />
              <YAxis dataKey="Active_User" stroke="#5550bd" />
              <Line type="monotone" dataKey="Active_User" stroke="#5550bd"/>
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
          </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
